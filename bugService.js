function validateBugReport(bug) {
  if (!bug.id || !bug.description) {
    return false;
  }
  return true;
}

function fixBugStatus(bug) {
  if (validateBugReport(bug)) {
    bug.status = "FIXED";
    return bug;
  }
  return null;
}

module.exports = { validateBugReport, fixBugStatus };
