# Lumi Agent Architecture — Research Validation

**Date:** June 2026
**Method:** Multi-source deep research (academic papers, primary engineering sources, regulatory bodies), adversarial cross-checking across five independent search angles.

This document records why the Lumi agent system is structured the way it is. It exists so future decisions don't quietly re-introduce the failure modes the research warned against.

---

## Summary Verdict

The plan's **governance** (three-tier protocol, hard limits, epistemic standards, human-final-sign-off) is well-supported by the evidence. The plan's original **agent count was too high**, and its original **SME-as-validator framing was the single highest liability risk**. Both were corrected.

---

## Finding 1 — Fewer agents is more reliable

- **MAST** (UC Berkeley, NeurIPS 2025; 1,600+ traces, 7 frameworks, κ=0.88): ~79% of multi-agent failures come from coordination and specification problems, not weak models. Adding agents adds the exact surface where systems fail. [arXiv 2503.13657](https://arxiv.org/abs/2503.13657)
- Production multi-agent failure rates measured at 41–87%. Error propagation can amplify ~17x through chains; mesh topologies become unobservable beyond 6–8 agents. [TDS](https://towardsdatascience.com/why-your-multi-agent-system-is-failing-escaping-the-17x-error-trap-of-the-bag-of-agents/)
- **Anthropic**: multi-agent suits parallelizable research, costs 4–15x tokens, is unsuitable for tightly interdependent tasks. [Anthropic](https://www.anthropic.com/engineering/built-multi-agent-research-system)
- **Cognition AI** ("Don't Build Multi-Agents"): multi-agent systems are fragile from poor context sharing and conflicting decisions. [Cognition](https://cognition.ai/blog/dont-build-multi-agents)

**Decision:** 4 live agents (Blossom, Sage, Reed, Moss). All SME + visual agents are on-demand, activated per task and stood down after.

## Finding 2 — LLM "SME validators" create false assurance and liability

- LLM hallucination is intrinsic; 1,200+ documented cases of hallucinated content reaching court filings, with sanctions. [Lexology](https://www.lexology.com/library/detail.aspx?g=dad04b37-bd0a-4f69-87b3-dbf91bc3647a)
- **MedAgentAudit** (3,600 cases): multi-agent expert systems show flawed consensus and suppression of correct minority views; agents on the same base model share correlated blind spots — so SMEs "checking" each other is partly illusory. [arXiv 2510.10185](https://arxiv.org/pdf/2510.10185)
- **Automation bias**: even experts override their own correct judgment ~7% of the time under AI influence; explainability doesn't fix it. For a non-expert founder the risk is worse. [Springer](https://link.springer.com/article/10.1007/s43681-025-00825-2)

**Decision:** SME agents (Willow, Clover, Fern, Briar, Thistle) reframed from validators to consultation-prep. No PASS/FAIL, no "compliant," no risk levels. They produce questions for the named human expert + claims requiring sign-off + a "What this is NOT" disclaimer.

## Finding 3 — Sole-orchestrator interface can bury errors

- Sole-interface designs hide agent memory, planned actions, and intermediate reasoning from oversight. [arXiv 2512.00742](https://arxiv.org/pdf/2512.00742)
- In orchestrated chains, errors get buried multiple steps back, making root cause analysis hard. [AI Agent Audit](https://medium.com/@Indext_Data_Lab/ai-agent-audit-the-complete-2026-governance-and-compliance-guide-aa945b2d2f67)

**Decision:** Blossom always attaches raw, unedited sub-agent output alongside her synthesis and attributes claims to the producing agent.

## Finding 4 — Governance instincts validated + sharpened

- "Meaningful human oversight" is a legal standard: rubber-stamping fails it (UK ICO, NIST, EU AI Act). Reviewer needs authority to override, understanding, and pre-execution timing. [ICO/NIST summary](https://governance.aicareer.pro/blog/meaningful-human-oversight-of-ai)
- **COPPA (FTC, eff. April 2026):** separate verifiable parental consent before child data used for AI training; biometrics now personal information; assign a COPPA owner. [Data Protection Report](https://www.dataprotectionreport.com/2025/06/ftcs-coppa-rule-changes-include-ai-training-consent-requirement/)
- **EU AI Act:** prohibits AI exploiting children's vulnerabilities (eff. Feb 2025); high-risk education-AI obligations enforceable Aug 2026. [5Rights](https://5rightsfoundation.com/ai-systems-that-exploit-the-vulnerabilities-of-children-are-now-illegal-in-the-eu/)
- **California AADC:** DPIA required for services likely accessed by children. [Securiti](https://securiti.ai/privacy-laws/us/california/california-age-appropriate-design-code-act/)

**Decision:** Added "meaningful human oversight" and "child-product regulatory awareness" to Blossom's Governance Principles; folded the April 2026 COPPA specifics into Willow.

---

## What stayed the same
Three-tier decision protocol · hard limits on people/legal/financial autonomy · epistemic standards across all agents · human as final authority · all domain knowledge written into the SME profiles.

## What changed
10 agents → 4 live + 6 on-demand · SME validators → SME consultation-prep · added sub-agent output transparency · added meaningful-oversight + child-reg governance.
