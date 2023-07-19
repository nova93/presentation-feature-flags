# Best practices

<div>
  <p><strong>Keep it Simple</strong>: Avoid using too many toggles; clean up old ones to reduce complexity.</p>
  <p><strong>Avoid Long-term Flags</strong>: Remove toggles that are no longer needed to avoid technical debt.</p>
  <p><strong>Monitoring and Metrics</strong>: Track toggle usage and performance impact using logging and monitoring tools.</p>
  <p><strong>Documentation</strong>: Clearly document the purpose and usage of each toggle to aid collaboration.</p>
  <p><strong>Automated Testing</strong>: Test toggles and their effects to avoid potential issues during deployment.</p>
</div>

<!-- ./components/SelfPromo.vue -->
<SelfPromo />

<style>
  .slidev-layout.intro h1 {
    color: var(--slidev-theme-primary);
  }
  .slidev-layout p {
    margin-top: 1.5rem;
  }
</style>

<!--
Some comment
-->