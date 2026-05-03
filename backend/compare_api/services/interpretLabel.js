function flattenText(sections) {
  return Object.values(sections).flat().join("\n").toLowerCase();
}

function includesAny(text, phrases) {
  return phrases.some((p) => text.includes(p));
}

function interpretLabel(normalized) {
  if (!normalized) {
    return {
      hasInteractionSection: false,
      severity: "unknown",
      summary: ["No matching label found."],
      flags: ["no-label-found"]
    };
  }

  const { sections } = normalized;
  const combined = flattenText(sections);

  const hasInteractionSection =
    sections.drugInteractions.length > 0 ||
    sections.labInteractions.length > 0;

  const hasContraindicationLanguage = includesAny(combined, [
    "contraindicated",
    "do not use",
    "must not be used"
  ]);

  const hasMonitoringLanguage = includesAny(combined, [
    "monitor",
    "monitoring",
    "dose adjustment",
    "adjust dose",
    "increase exposure",
    "decrease exposure",
    "avoid concomitant use"
  ]);

  const hasBoxedWarning = sections.boxedWarning.length > 0;

  let severity = "info";
  if (hasInteractionSection) severity = "use-caution";
  if (hasContraindicationLanguage || hasBoxedWarning) severity = "high-caution";

  const flags = [];
  const summary = [];

  if (hasInteractionSection) {
    flags.push("interaction-section-present");
    summary.push("This label includes interaction-related information.");
  }

  if (hasMonitoringLanguage) {
    flags.push("monitoring-language-present");
    summary.push("The label includes caution or monitoring language.");
  }

  if (hasContraindicationLanguage) {
    flags.push("contraindication-language-present");
    summary.push("The label includes contraindication language.");
  }

  if (hasBoxedWarning) {
    flags.push("boxed-warning-present");
    summary.push("A boxed warning is present on the label.");
  }

  if (!summary.length) {
    summary.push("No clear interaction-related language was found in the fetched sections.");
  }

  return {
    hasInteractionSection,
    severity,
    summary,
    flags
  };
}

module.exports = { interpretLabel };
