// src/components/Onboarding.jsx
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useLanguage } from "../contexts/LanguageContext";
import { supabase } from "../lib/supabase";
import { Sparkles, ChevronRight } from "lucide-react";

const INDIAN_STATES = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry",
];

const OCCUPATION_OPTIONS = [
  "homemaker",
  "student",
  "self_employed",
  "salaried",
  "farmer",
  "business_owner",
  "retired",
  "seeking_employment",
  "other",
];

export default function Onboarding({ onComplete }) {
  const { user, profile, refreshProfile } = useAuth();
  const { t, language, setLanguage } = useLanguage();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    preferred_language: language || "en",
    home_state: "",
    occupation: "",
    financial_goals: [],
    income_range: "",
  });

  // Safety: if profile is already loaded, skip onboarding
  if (profile) {
    if (onComplete) onComplete();
    return null;
  }

  const handleLanguageSelect = (lang) => {
    setFormData({ ...formData, preferred_language: lang });
    setLanguage(lang);
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError("");

  // Add timeout to prevent infinite loading
  const timeoutId = setTimeout(() => {
    setLoading(false);
    setError("Request timed out. Please check your connection and try again.");
  }, 15000); // 15 second timeout

  try {
    if (!user?.id) {
      throw new Error("No authenticated user found. Please sign in again.");
    }

    console.log("🔵 Onboarding: Creating profile for user", user.id);

    const profileData = {
      id: user.id,
      preferred_language: formData.preferred_language,
      home_state: formData.home_state,
      occupation: formData.occupation,
      financial_goals: formData.financial_goals,
      income_range: formData.income_range,
      updated_at: new Date().toISOString(),
    };

    console.log("🔵 Onboarding: Attempting to save profile...", profileData);

    const { error: profileError } = await supabase
      .from("profiles")
      .upsert(profileData, {
        onConflict: "id",
      });

    if (profileError) {
      console.error("❌ Onboarding: Error creating profile:", profileError);
      console.error("❌ Error details:", {
        message: profileError.message,
        details: profileError.details,
        hint: profileError.hint,
        code: profileError.code,
      });

      if (profileError.code === "42P01") {
        throw new Error(
          'Database table "profiles" does not exist. Please run the setup SQL.'
        );
      } else if (profileError.code === "42501") {
        throw new Error("Permission denied. Please check RLS policies.");
      } else {
        throw profileError;
      }
    }

    console.log("✅ Onboarding: Profile created/updated successfully");

    // Clear timeout since operation succeeded
    clearTimeout(timeoutId);

    // Load fresh profile into context
    await refreshProfile();

    if (onComplete) onComplete();
  } catch (err) {
    console.error("❌ Onboarding: Exception:", err);
    
    // Provide user-friendly error messages
    let errorMessage = "Failed to save profile. Please try again.";
    
    if (err.message.includes("fetch")) {
      errorMessage = "Network error. Please check your internet connection.";
    } else if (err.message) {
      errorMessage = err.message;
    }
    
    setError(errorMessage);
  } finally {
    // CRITICAL: Always clear timeout and reset loading state
    clearTimeout(timeoutId);
    setLoading(false);
  }
};


  const toggleGoal = (goal) => {
    setFormData((prev) => ({
      ...prev,
      financial_goals: prev.financial_goals.includes(goal)
        ? prev.financial_goals.filter((g) => g !== goal)
        : [...prev.financial_goals, goal],
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden">
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-8 text-white">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-12 h-12" />
          </div>
          <h1 className="text-3xl font-bold text-center mb-2">
            {t("welcomeToArthSakhi") || "Welcome to ArthSakhi!"}
          </h1>
          <p className="text-center text-emerald-50">
            {t("onboardingSubtitle") ||
              "Let's personalize your financial journey"}
          </p>
        </div>
        <div className="p-8">
          {/* Progress indicator */}
          <div className="flex items-center justify-between mb-8">
            {[1, 2, 3].map((num) => (
              <div key={num} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    step >= num
                      ? "bg-emerald-600 text-white"
                      : "bg-gray-200 text-gray-400"
                  }`}
                >
                  {num}
                </div>
                {num < 3 && (
                  <div
                    className={`h-1 w-24 mx-2 ${
                      step > num ? "bg-emerald-600" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Step 1: Language */}
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  {t("selectLanguage") || "Select Your Preferred Language"}
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { code: "en", name: "English", native: "English" },
                    { code: "hi", name: "Hindi", native: "हिंदी" },
                    { code: "mr", name: "Marathi", native: "मराठी" },
                    { code: "ta", name: "Tamil", native: "தமிழ்" },
                    { code: "bn", name: "Bengali", native: "বাংলা" },
                    { code: "kn", name: "Kannada", native: "ಕನ್ನಡ" },
                  ].map((lang) => (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={() => handleLanguageSelect(lang.code)}
                      className={`p-4 rounded-xl border-2 transition-all text-left ${
                        formData.preferred_language === lang.code
                          ? "border-emerald-600 bg-emerald-50"
                          : "border-gray-200 hover:border-emerald-300"
                      }`}
                    >
                      <div className="font-semibold text-gray-800">
                        {lang.name}
                      </div>
                      <div className="text-sm text-gray-600">{lang.native}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Basic Info */}
            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  {t("tellUsAboutYou") || "Tell Us About You"}
                </h2>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t("homeState") || "Home State"}
                  </label>
                  <select
                    value={formData.home_state}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        home_state: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    required
                  >
                    <option value="">
                      {t("selectState") || "Select your state"}
                    </option>
                    {INDIAN_STATES.map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t("occupation") || "Occupation"}
                  </label>
                  <select
                    value={formData.occupation}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        occupation: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    required
                  >
                    <option value="">
                      {t("selectOccupation") || "Select your occupation"}
                    </option>
                    {OCCUPATION_OPTIONS.map((occ) => (
                      <option key={occ} value={occ}>
                        {t(`occupation.${occ}`) || occ.replace(/_/g, " ")}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t("monthlyIncomeRange") || "Monthly Income Range"}
                  </label>
                  <select
                    value={formData.income_range}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        income_range: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    required
                  >
                    <option value="">
                      {t("selectRange") || "Select range"}
                    </option>
                    <option value="below_10k">Below ₹10,000</option>
                    <option value="10k_25k">₹10,000 - ₹25,000</option>
                    <option value="25k_50k">₹25,000 - ₹50,000</option>
                    <option value="50k_100k">₹50,000 - ₹1,00,000</option>
                    <option value="above_100k">Above ₹1,00,000</option>
                  </select>
                </div>
              </div>
            )}

            {/* Step 3: Goals */}
            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  {t("financialGoals") || "What Are Your Financial Goals?"}
                </h2>
                <p className="text-gray-600 mb-4">
                  {t("selectAllThatApply") || "Select all that apply"}
                </p>

                <div className="space-y-3">
                  {[
                    "saving_emergency_fund",
                    "buying_house",
                    "childrens_education",
                    "retirement_planning",
                    "starting_business",
                    "reducing_debt",
                    "learning_investing",
                    "building_credit",
                  ].map((goal) => (
                    <button
                      key={goal}
                      type="button"
                      onClick={() => toggleGoal(goal)}
                      className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                        formData.financial_goals.includes(goal)
                          ? "border-emerald-600 bg-emerald-50"
                          : "border-gray-200 hover:border-emerald-300"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-gray-800">
                          {t(`goal.${goal}`) || goal.replace(/_/g, " ")}
                        </span>
                        {formData.financial_goals.includes(goal) && (
                          <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center text-white">
                            ✓
                          </div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="px-6 py-3 text-gray-600 hover:text-gray-800 font-medium"
                >
                  {t("back") || "Back"}
                </button>
              )}

              <div className="ml-auto">
                {step < 3 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step + 1)}
                    disabled={
                      (step === 1 && !formData.preferred_language) ||
                      (step === 2 &&
                        (!formData.home_state ||
                          !formData.occupation ||
                          !formData.income_range))
                    }
                    className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    {t("next") || "Next"}
                    <ChevronRight size={20} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={loading || formData.financial_goals.length === 0}
                    className="px-8 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading
                      ? t("saving") || "Saving..."
                      : t("getStarted") || "Get Started"}
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
