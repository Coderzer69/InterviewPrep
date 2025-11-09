/**
 * Test script for Interview Backend API
 * Run with: node test-api.js
 */

const API_URL =
  "https://interview-prep-backend-indol.vercel.app/api/v1/interview-bit";

// Test configuration
const testConfig = {
  role: "software-engineer",
  mode: "technical",
};

/**
 * Test 1: Get initial question
 */
async function testStartInterview() {
  console.log("\n=== Test 1: Start Interview ===");
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        role: testConfig.role,
        mode: testConfig.mode,
        action: "start",
        answer: "",
        previousQuestion: "",
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("✅ Success!");
    console.log("Response:", JSON.stringify(data, null, 2));
    return data;
  } catch (error) {
    console.error("❌ Error:", error.message);
    return null;
  }
}

/**
 * Test 2: Submit answer
 */
async function testSubmitAnswer(question, answer) {
  console.log("\n=== Test 2: Submit Answer ===");
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        role: testConfig.role,
        mode: testConfig.mode,
        action: "answer",
        previousQuestion: question,
        answer: answer,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("✅ Success!");
    console.log("Response:", JSON.stringify(data, null, 2));
    return data;
  } catch (error) {
    console.error("❌ Error:", error.message);
    return null;
  }
}

/**
 * Test 3: Different roles and modes
 */
async function testDifferentConfigs() {
  console.log("\n=== Test 3: Different Roles and Modes ===");

  const testCases = [
    { role: "product-manager", mode: "behavioral" },
    { role: "data-scientist", mode: "technical" },
    { role: "data-analyst", mode: "technical" },
  ];

  for (const config of testCases) {
    console.log(`\nTesting: ${config.role} - ${config.mode}`);
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          role: config.role,
          mode: config.mode,
          action: "start",
          answer: "",
          previousQuestion: "",
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("✅ Success!");
      console.log("Question:", data.question);
      console.log("Topic:", data.topic || "N/A");
      console.log("Difficulty:", data.difficulty || "N/A");
    } catch (error) {
      console.error("❌ Error:", error.message);
    }
  }
}

/**
 * Run all tests
 */
async function runTests() {
  console.log("🚀 Starting API Tests...");
  console.log(`API URL: ${API_URL}`);
  console.log(`Test Config: ${testConfig.role} - ${testConfig.mode}`);

  // Test 1: Start interview
  const startData = await testStartInterview();

  if (startData && startData.question) {
    // Test 2: Submit answer
    const testAnswer = "This is a test answer to evaluate the API response.";
    await testSubmitAnswer(startData.question, testAnswer);
  }

  // Test 3: Different configurations
  await testDifferentConfigs();

  console.log("\n✨ Tests completed!");
}

// Run tests if this file is executed directly
if (typeof require !== "undefined" && require.main === module) {
  // For Node.js environments
  if (typeof fetch === "undefined") {
    console.error(
      "❌ This script requires Node.js 18+ with fetch support, or run in a browser."
    );
    console.log("💡 Alternatively, install node-fetch: npm install node-fetch");
    process.exit(1);
  }
  runTests().catch(console.error);
}

// Export for use in other files
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    testStartInterview,
    testSubmitAnswer,
    testDifferentConfigs,
    runTests,
  };
}
