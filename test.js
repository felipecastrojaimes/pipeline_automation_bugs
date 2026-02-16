const { fixBugStatus } = require("./bugService");

function testBugFix() {
  const bug = {
    id: 101,
    description: "Error en validación de login",
    status: "OPEN"
  };

  const fixedBug = fixBugStatus(bug);

  if (fixedBug && fixedBug.status === "FIXED") {
    console.log("✅ Test passed: Bug status updated correctly.");
    process.exit(0);
  } else {
    console.error("❌ Test failed: Bug was not fixed properly.");
    process.exit(1);
  }
}

testBugFix();
