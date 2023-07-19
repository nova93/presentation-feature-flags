# Example

```js
// Example function with a feature toggle
function newFeatureFunctionality() {
  if (featureToggle('newFeature')) {
    // Code for the new feature
    console.log('New feature is active! 🚀');
  } else {
    // Code for the old feature or a fallback
    console.log('Using the old feature...');
  }
}

// Function to fetch feature toggle state
function featureToggle(toggleName) {
  // In a real application, this state would come from a configuration file or server
  const featureToggles = {
    newFeature: true, // Set to false to disable the new feature
  };

  return featureToggles[toggleName] || false;
}

// Example usage
newFeatureFunctionality();

```

<!-- ./components/SelfPromo.vue -->
<SelfPromo />

<style>
  .slidev-layout.intro h1 {
    color: var(--slidev-theme-primary);
  }
</style>

<!--
Some comment
-->