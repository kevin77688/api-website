const MODEL_CATALOG = {
  "claude-3-haiku": {
    "provider": "AWS Bedrock",
    "litellm_provider": "bedrock",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 0.25,
    "outCost": 1.25,
    "maxTokens": "200k",
    "maxInputTokens": 200000,
    "maxOutputTokens": 4096,
    "releaseDate": "2024-03-07",
    "desc": "Claude-3-Haiku Fastest model, great for live chats and cost-effective tasks like content moderation.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "claude-4-sonnet-aws": {
    "provider": "AWS Bedrock",
    "litellm_provider": "bedrock",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 3,
    "outCost": 15,
    "maxTokens": "200k",
    "maxInputTokens": 200000,
    "maxOutputTokens": 64000,
    "releaseDate": "2025-05-14",
    "desc": "Anthropic's mid-size model with superior intelligence for high-volume uses, such as coding, in-depth research, and agents.",
    "health": {
      "total": 3,
      "online": 3
    }
  },
  "claude-4.5-sonnet-aws": {
    "provider": "AWS Bedrock",
    "litellm_provider": "bedrock",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 3,
    "outCost": 15,
    "maxTokens": "200k",
    "maxInputTokens": 200000,
    "maxOutputTokens": 64000,
    "releaseDate": "2025-09-29",
    "desc": "Anthropic's mid-size model with the highest intelligence across most tasks with exceptional agent and coding capabilities.",
    "health": {
      "total": 3,
      "online": 3
    }
  },
  "claude-4-sonnet": {
    "provider": "Vertex AI",
    "litellm_provider": "vertex_ai",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 3,
    "outCost": 15,
    "maxTokens": "200k",
    "maxInputTokens": 200000,
    "maxOutputTokens": 64000,
    "releaseDate": "2025-05-14",
    "desc": "Anthropic's mid-size model with superior intelligence for high-volume uses, such as coding, in-depth research, and agents.",
    "health": {
      "total": 5,
      "online": 5
    }
  },
  "claude-4.5-sonnet": {
    "provider": "Vertex AI",
    "litellm_provider": "vertex_ai",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 3,
    "outCost": 15,
    "maxTokens": "200k",
    "maxInputTokens": 200000,
    "maxOutputTokens": 64000,
    "releaseDate": "2025-09-29",
    "desc": "Anthropic's mid-size model with the highest intelligence across most tasks with exceptional agent and coding capabilities.",
    "health": {
      "total": 5,
      "online": 5
    }
  },
  "claude-4.5-haiku-aws": {
    "provider": "AWS Bedrock",
    "litellm_provider": "bedrock",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 1,
    "outCost": 5,
    "maxTokens": "200k",
    "maxInputTokens": 200000,
    "maxOutputTokens": 64000,
    "releaseDate": "2025-10-01",
    "desc": "Claude Haiku 4.5 delivers near-frontier performance for a wide range of use cases, and stands out as one of the best coding models in the world–with the right speed and cost to power free products and high-volume user experiences.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "claude-4.5-haiku": {
    "provider": "Vertex AI",
    "litellm_provider": "vertex_ai",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 1,
    "outCost": 5,
    "maxTokens": "200k",
    "maxInputTokens": 200000,
    "maxOutputTokens": 64000,
    "releaseDate": "2025-10-01",
    "desc": "Claude Haiku 4.5 delivers near-frontier performance for a wide range of use cases, and stands out as one of the best coding models in the world–with the right speed and cost to power free products and high-volume user experiences.",
    "health": {
      "total": 2,
      "online": 2
    }
  },
  "claude-4.5-haiku-anthropic": {
    "provider": "Anthropic",
    "litellm_provider": "anthropic",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 1,
    "outCost": 5,
    "maxTokens": "200k",
    "maxInputTokens": 200000,
    "maxOutputTokens": 64000,
    "releaseDate": "2025-10-01",
    "desc": "Claude Haiku 4.5 delivers near-frontier performance for a wide range of use cases, and stands out as one of the best coding models in the world–with the right speed and cost to power free products and high-volume user experiences.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "claude-4-opus": {
    "provider": "Vertex AI",
    "litellm_provider": "vertex_ai",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 15,
    "outCost": 75,
    "maxTokens": "200k",
    "maxInputTokens": 200000,
    "maxOutputTokens": 32000,
    "releaseDate": "2025-05-14",
    "desc": "Anthropic's most powerful model yet and the state-of-the-art coding model.\nClaude Opus 4 delivers sustained performance on long-running tasks that require focused effort and thousands of steps, significantly expanding what AI agents can solve.",
    "health": {
      "total": 5,
      "online": 5
    }
  },
  "claude-4.1-opus-aws": {
    "provider": "AWS Bedrock",
    "litellm_provider": "bedrock",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 15,
    "outCost": 75,
    "maxTokens": "200k",
    "maxInputTokens": 200000,
    "maxOutputTokens": 32000,
    "releaseDate": "2025-08-05",
    "desc": "Anthropic's most powerful model yet and the state-of-the-art coding model.\nClaude Opus 4 delivers sustained performance on long-running tasks that require focused effort and thousands of steps, significantly expanding what AI agents can solve.",
    "health": {
      "total": 3,
      "online": 3
    }
  },
  "claude-4.1-opus": {
    "provider": "Vertex AI",
    "litellm_provider": "vertex_ai",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 15,
    "outCost": 75,
    "maxTokens": "200k",
    "maxInputTokens": 200000,
    "maxOutputTokens": 32000,
    "releaseDate": "2025-08-05",
    "desc": "Anthropic's most powerful model yet and the state-of-the-art coding model.\nClaude Opus 4 delivers sustained performance on long-running tasks that require focused effort and thousands of steps, significantly expanding what AI agents can solve.",
    "health": {
      "total": 5,
      "online": 5
    }
  },
  "claude-4.5-opus-aws": {
    "provider": "AWS Bedrock",
    "litellm_provider": "bedrock",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 5,
    "outCost": 25,
    "maxTokens": "200k",
    "maxInputTokens": 200000,
    "maxOutputTokens": 64000,
    "releaseDate": "2025-11-01",
    "desc": "The next generation of Anthropic's most intelligent model, Claude Opus 4.5 is an industry leader across coding, agents, computer use, and enterprise workflows.",
    "health": {
      "total": 3,
      "online": 3
    }
  },
  "claude-4.5-opus": {
    "provider": "Vertex AI",
    "litellm_provider": "vertex_ai",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 5,
    "outCost": 25,
    "maxTokens": "200k",
    "maxInputTokens": 200000,
    "maxOutputTokens": 64000,
    "releaseDate": "2025-11-01",
    "desc": "The next generation of Anthropic's most intelligent model, Claude Opus 4.5 is an industry leader across coding, agents, computer use, and enterprise workflows.",
    "health": {
      "total": 5,
      "online": 5
    }
  },
  "claude-4.6-opus": {
    "provider": "Vertex AI",
    "litellm_provider": "vertex_ai",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 5,
    "outCost": 25,
    "maxTokens": "200k",
    "maxInputTokens": 200000,
    "maxOutputTokens": 128000,
    "releaseDate": "2026-02-05",
    "desc": "Claude Opus 4.6 is the next generation of our most intelligent model, and the world’s best model for coding, enterprise agents, and professional work. Opus 4.6 features a 1M token context window in beta. Opus 4.6 supports outputs of up to 128k tokens, which lets Claude complete larger-output tasks without breaking them into multiple requests.",
    "health": {
      "total": 5,
      "online": 5
    }
  },
  "claude-4.6-opus-aws": {
    "provider": "AWS Bedrock",
    "litellm_provider": "bedrock",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 5,
    "outCost": 25,
    "maxTokens": "200k",
    "maxInputTokens": 200000,
    "maxOutputTokens": 128000,
    "releaseDate": "2026-02-05",
    "desc": "Claude Opus 4.6 is the next generation of our most intelligent model, and the world’s best model for coding, enterprise agents, and professional work. Opus 4.6 features a 1M token context window in beta. Opus 4.6 supports outputs of up to 128k tokens, which lets Claude complete larger-output tasks without breaking them into multiple requests.",
    "health": {
      "total": 3,
      "online": 3
    }
  },
  "claude-4.6-opus-anthropic": {
    "provider": "Anthropic",
    "litellm_provider": "anthropic",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 5,
    "outCost": 25,
    "maxTokens": "200k",
    "maxInputTokens": 200000,
    "maxOutputTokens": 128000,
    "releaseDate": "2026-02-05",
    "desc": "Claude Opus 4.6 is the next generation of our most intelligent model, and the world’s best model for coding, enterprise agents, and professional work. Opus 4.6 features a 1M token context window in beta. Opus 4.6 supports outputs of up to 128k tokens, which lets Claude complete larger-output tasks without breaking them into multiple requests.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "claude-4.6-sonnet": {
    "provider": "Vertex AI",
    "litellm_provider": "vertex_ai",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 3,
    "outCost": 15,
    "maxTokens": "200k",
    "maxInputTokens": 200000,
    "maxOutputTokens": 128000,
    "releaseDate": "2026-02-05",
    "desc": "Claude Sonnet 4.6 delivers frontier intelligence at scale—built for coding, agents, and enterprise workflows.",
    "health": {
      "total": 5,
      "online": 5
    }
  },
  "claude-4.6-sonnet-aws": {
    "provider": "AWS Bedrock",
    "litellm_provider": "bedrock",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 3,
    "outCost": 15,
    "maxTokens": "200k",
    "maxInputTokens": 200000,
    "maxOutputTokens": 64000,
    "releaseDate": "2026-02-05",
    "desc": "Claude Sonnet 4.6 delivers frontier intelligence at scale—built for coding, agents, and enterprise workflows.",
    "health": {
      "total": 3,
      "online": 3
    }
  },
  "claude-4.6-sonnet-anthropic": {
    "provider": "Anthropic",
    "litellm_provider": "anthropic",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 3,
    "outCost": 15,
    "maxTokens": "200k",
    "maxInputTokens": 200000,
    "maxOutputTokens": 64000,
    "releaseDate": "2026-02-05",
    "desc": "Claude Sonnet 4.6 delivers frontier intelligence at scale—built for coding, agents, and enterprise workflows.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "claude-5-sonnet-gcp": {
    "provider": "Vertex AI",
    "litellm_provider": "vertex_ai",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 2,
    "outCost": 10,
    "maxTokens": "1M",
    "maxInputTokens": 1000000,
    "maxOutputTokens": 128000,
    "releaseDate": "2025-01-01",
    "desc": "Claude Sonnet 5 is the best combination of speed and intelligence, with a 1M token context window and adaptive thinking for complex reasoning tasks.",
    "health": {
      "total": 5,
      "online": 5
    }
  },
  "claude-5-sonnet-aws": {
    "provider": "AWS Bedrock",
    "litellm_provider": "bedrock",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 2,
    "outCost": 10,
    "maxTokens": "1M",
    "maxInputTokens": 1000000,
    "maxOutputTokens": 128000,
    "releaseDate": "2025-01-01",
    "desc": "Claude Sonnet 5 is the best combination of speed and intelligence, with a 1M token context window and adaptive thinking for complex reasoning tasks.",
    "health": {
      "total": 3,
      "online": 3
    }
  },
  "claude-5-sonnet-anthropic": {
    "provider": "Anthropic",
    "litellm_provider": "anthropic",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 2,
    "outCost": 10,
    "maxTokens": "1M",
    "maxInputTokens": 1000000,
    "maxOutputTokens": 128000,
    "releaseDate": "2025-01-01",
    "desc": "Claude Sonnet 5 is the best combination of speed and intelligence, with a 1M token context window and adaptive thinking for complex reasoning tasks.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "claude-5-opus-gcp": {
    "provider": "Vertex AI",
    "litellm_provider": "vertex_ai",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 5,
    "outCost": 25,
    "maxTokens": "1M",
    "maxInputTokens": 1000000,
    "maxOutputTokens": 128000,
    "releaseDate": "2025-01-01",
    "desc": "Claude Opus 5 is Anthropic's most advanced Opus model, powering long-running agents while delivering improvements in coding and professional work. Features a 1M token context window and supports outputs up to 128k tokens.",
    "health": {
      "total": 5,
      "online": 5
    }
  },
  "claude-5-opus-aws": {
    "provider": "AWS Bedrock",
    "litellm_provider": "bedrock",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 5,
    "outCost": 25,
    "maxTokens": "1M",
    "maxInputTokens": 1000000,
    "maxOutputTokens": 128000,
    "releaseDate": "2025-01-01",
    "desc": "Claude Opus 5 is Anthropic's most advanced Opus model, powering long-running agents while delivering improvements in coding and professional work. Features a 1M token context window and supports outputs up to 128k tokens.",
    "health": {
      "total": 3,
      "online": 3
    }
  },
  "claude-5-opus-anthropic": {
    "provider": "Anthropic",
    "litellm_provider": "anthropic",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 5,
    "outCost": 25,
    "maxTokens": "1M",
    "maxInputTokens": 1000000,
    "maxOutputTokens": 128000,
    "releaseDate": "2025-01-01",
    "desc": "Claude Opus 5 is Anthropic's most advanced Opus model, powering long-running agents while delivering improvements in coding and professional work. Features a 1M token context window and supports outputs up to 128k tokens.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "claude-4.8-opus-gcp": {
    "provider": "Vertex AI",
    "litellm_provider": "vertex_ai",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 5,
    "outCost": 25,
    "maxTokens": "1M",
    "maxInputTokens": 1000000,
    "maxOutputTokens": 128000,
    "releaseDate": "2025-05-14",
    "desc": "Claude Opus 4.8 is Anthropic's most capable model for complex reasoning and agentic coding. Optimized for coding, agents, and deeper reasoning in enterprise workflows. Features a 1M token context window and supports outputs up to 128k tokens.",
    "health": {
      "total": 5,
      "online": 5
    }
  },
  "claude-4.8-opus-aws": {
    "provider": "AWS Bedrock",
    "litellm_provider": "bedrock",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 5,
    "outCost": 25,
    "maxTokens": "1M",
    "maxInputTokens": 1000000,
    "maxOutputTokens": 128000,
    "releaseDate": "2025-05-14",
    "desc": "Claude Opus 4.8 is Anthropic's most capable model for complex reasoning and agentic coding. Optimized for coding, agents, and deeper reasoning in enterprise workflows. Features a 1M token context window and supports outputs up to 128k tokens.",
    "health": {
      "total": 3,
      "online": 3
    }
  },
  "claude-4.8-opus-anthropic": {
    "provider": "Anthropic",
    "litellm_provider": "anthropic",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 5,
    "outCost": 25,
    "maxTokens": "1M",
    "maxInputTokens": 1000000,
    "maxOutputTokens": 128000,
    "releaseDate": "2025-05-14",
    "desc": "Claude Opus 4.8 is Anthropic's most capable model for complex reasoning and agentic coding. Optimized for coding, agents, and deeper reasoning in enterprise workflows. Features a 1M token context window and supports outputs up to 128k tokens.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "claude-4.7-opus-gcp": {
    "provider": "Vertex AI",
    "litellm_provider": "vertex_ai",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 5,
    "outCost": 25,
    "maxTokens": "1M",
    "maxInputTokens": 1000000,
    "maxOutputTokens": 128000,
    "releaseDate": "2025-05-14",
    "desc": "Claude Opus 4.7 is Anthropic's most capable generally available model, advancing performance across coding, enterprise workflows, and long-running agentic tasks. Features a 1M token context window and supports outputs up to 128k tokens.",
    "health": {
      "total": 5,
      "online": 5
    }
  },
  "claude-4.7-opus-aws": {
    "provider": "AWS Bedrock",
    "litellm_provider": "bedrock",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 5,
    "outCost": 25,
    "maxTokens": "1M",
    "maxInputTokens": 1000000,
    "maxOutputTokens": 128000,
    "releaseDate": "2025-05-14",
    "desc": "Claude Opus 4.7 is Anthropic's most capable generally available model, advancing performance across coding, enterprise workflows, and long-running agentic tasks. Features a 1M token context window and supports outputs up to 128k tokens.",
    "health": {
      "total": 3,
      "online": 3
    }
  },
  "claude-4.7-opus-anthropic": {
    "provider": "Anthropic",
    "litellm_provider": "anthropic",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 5,
    "outCost": 25,
    "maxTokens": "1M",
    "maxInputTokens": 1000000,
    "maxOutputTokens": 128000,
    "releaseDate": "2025-05-14",
    "desc": "Claude Opus 4.7 is Anthropic's most capable generally available model, advancing performance across coding, enterprise workflows, and long-running agentic tasks. Features a 1M token context window and supports outputs up to 128k tokens.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "claude-fable-5-gcp": {
    "provider": "Vertex AI",
    "litellm_provider": "vertex_ai",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 10,
    "outCost": 50,
    "maxTokens": "1M",
    "maxInputTokens": 1000000,
    "maxOutputTokens": 128000,
    "releaseDate": "2026-06-01",
    "desc": "Claude Fable 5 is Anthropic's most capable widely released model, for the most demanding reasoning and long-horizon agentic work. Features a 1M token context window and supports outputs up to 128k tokens.",
    "health": {
      "total": 5,
      "online": 5
    }
  },
  "claude-fable-5-aws": {
    "provider": "AWS Bedrock",
    "litellm_provider": "bedrock",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 10,
    "outCost": 50,
    "maxTokens": "1M",
    "maxInputTokens": 1000000,
    "maxOutputTokens": 128000,
    "releaseDate": "2026-06-01",
    "desc": "Claude Fable 5 is Anthropic's most capable widely released model, for the most demanding reasoning and long-horizon agentic work. Features a 1M token context window and supports outputs up to 128k tokens.",
    "health": {
      "total": 3,
      "online": 3
    }
  },
  "claude-fable-5-anthropic": {
    "provider": "Anthropic",
    "litellm_provider": "anthropic",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 10,
    "outCost": 50,
    "maxTokens": "1M",
    "maxInputTokens": 1000000,
    "maxOutputTokens": 128000,
    "releaseDate": "2026-06-01",
    "desc": "Claude Fable 5 is Anthropic's most capable widely released model, for the most demanding reasoning and long-horizon agentic work. Features a 1M token context window and supports outputs up to 128k tokens.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "qwen3.5-27b-crq-sft-gmi": {
    "provider": "TrendMicro",
    "litellm_provider": "trendmicro",
    "mode": "chat",
    "modality": [
      "Text"
    ],
    "inCost": 0,
    "outCost": 0,
    "maxTokens": "262.1k",
    "maxInputTokens": 262144,
    "maxOutputTokens": 262144,
    "releaseDate": "2026-01-10",
    "desc": "Qwen3.5 27B CRQ SFT (TrendMicro) - An internal model fine-tuned from Qwen3.5-27B, preserving the Qwen3.5 series' strengths in reasoning, instruction-following, agent capabilities, and multilingual support.",
    "health": {
      "total": 1,
      "online": 0
    }
  },
  "deepseek-r1": {
    "provider": "Azure Foundry",
    "litellm_provider": "Azure Foundry",
    "mode": "chat",
    "modality": [
      "Text"
    ],
    "inCost": 1.485,
    "outCost": 5.94,
    "maxTokens": "128k",
    "maxInputTokens": 128000,
    "maxOutputTokens": 8192,
    "releaseDate": "2025-01-20",
    "desc": "🎉✨ DeepSeek-R1 excels at reasoning tasks using a step-by-step training process, such as language, scientific reasoning, and coding tasks. It features 671B total parameters with 37B active parameters, and 128k context length.\nDeepSeek-R1 builds on the progress of earlier reasoning-focused models that improved performance by extending Chain-of-Thought (CoT) reasoning. DeepSeek-R1 takes things further by combining reinforcement learning (RL) with fine-tuning on carefully chosen datasets. It evolved from an earlier version, DeepSeek-R1-Zero, which relied solely on RL and showed strong reasoning skills but had issues like hard-to-read outputs and language inconsistencies. To address these limitations, DeepSeek-R1 incorporates a small amount of cold-start data and follows a refined training pipeline that blends reasoning-oriented RL with supervised fine-tuning on curated datasets, resulting in a model that achieves state-of-the-art performance on reasoning benchmarks.\nUsage Recommendations\nWe recommend adhering to the following configurations when utilizing the DeepSeek-R1 series models, including benchmarking, to achieve the expected performance:\n✅ Usage Tips\n• 📝 Skip system prompts - use user prompts only\n• 🧮 For math: Add \\\"Please reason step by step, \\boxed{}\\\"\n• 🔄 Run multiple tests for accurate evaluation\n⚠️ Important Note\n• 🛡️ Consider filtering  tag outputs in production\n• 🎯 Focus on final responses over reasoning steps\n• 📊 Processing speed may be limited during peak usage.\n• 🚦 Throughput optimization in progress.",
    "health": {
      "total": 2,
      "online": 2
    }
  },
  "kimi-k2.6": {
    "provider": "Azure Foundry",
    "litellm_provider": "azure",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 0.95,
    "outCost": 4,
    "maxTokens": "262.1k",
    "maxInputTokens": 262144,
    "maxOutputTokens": 262144,
    "releaseDate": "2026-04-20",
    "desc": "Kimi K2.6 is Moonshot AI's open-source, native multimodal agentic model with 1T total parameters (32B active via MoE).\nSupports text and image inputs with 256K context; advances long-horizon coding, autonomous execution, and multi-agent orchestration on Azure AI Foundry.",
    "health": {
      "total": 2,
      "online": 2
    }
  },
  "kimi-k2.7-code": {
    "provider": "Azure Foundry",
    "litellm_provider": "azure",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 0.95,
    "outCost": 4,
    "maxTokens": "262.1k",
    "maxInputTokens": 262144,
    "maxOutputTokens": 262144,
    "releaseDate": "2026-06-15",
    "desc": "Kimi K2.7 Code is Moonshot AI's coding-focused model in the Kimi K2 family, built for long-horizon, multi-step software engineering with a 262K-token context window.\nImproves end-to-end task completion and agentic execution over K2.6 while reducing thinking-token usage by ~30%. Supports text and image inputs on Azure AI Foundry.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "kimi-k3-dbs": {
    "provider": "Databricks",
    "litellm_provider": "databricks",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 3,
    "outCost": 15,
    "maxTokens": "1.05M",
    "maxInputTokens": 1048576,
    "maxOutputTokens": 65536,
    "releaseDate": "2026-07-01",
    "desc": "Kimi K3 is Moonshot AI's open-weight multimodal reasoning model for coding, knowledge work, and agent workflows.\nIt provides a 1M-token context window through Databricks Foundation Model APIs.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "deepseek-r1-aws": {
    "provider": "AWS Bedrock",
    "litellm_provider": "AWS Bedrock",
    "mode": "chat",
    "modality": [
      "Text"
    ],
    "inCost": 1.35,
    "outCost": 5.4,
    "maxTokens": "128k",
    "maxInputTokens": 128000,
    "maxOutputTokens": 8192,
    "releaseDate": "2025-01-20",
    "desc": "DeepSeek-R1, a publicly available model under MIT license, represents a breakthrough in AI reasoning capabilities, delivering exceptional accuracy and nuanced understanding across complex tasks",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "deepseek-r1-distill-llama-8b": {
    "provider": "AWS Bedrock",
    "litellm_provider": "bedrock",
    "mode": "chat",
    "modality": [
      "Text"
    ],
    "inCost": 0,
    "outCost": 0,
    "maxTokens": "128k",
    "maxInputTokens": 128000,
    "maxOutputTokens": 8192,
    "releaseDate": "2025-01-20",
    "desc": "DeepSeek-R1-Distill models are fine-tuned based on open-source models, using samples generated by DeepSeek-R1.\nDue to self-deploy on AWS Bedrock, it requires a few minutes to warm up and be ready after the first request.\nRef link: https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Llama-8B",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "deepseek-r1-distill-llama-70b": {
    "provider": "AWS Bedrock",
    "litellm_provider": "bedrock",
    "mode": "chat",
    "modality": [
      "Text"
    ],
    "inCost": 0,
    "outCost": 0,
    "maxTokens": "128k",
    "maxInputTokens": 128000,
    "maxOutputTokens": 8192,
    "releaseDate": "2025-01-20",
    "desc": "DeepSeek-R1-Distill models are fine-tuned based on open-source models, using samples generated by DeepSeek-R1.\nDue to self-deploy on AWS Bedrock, it requires a few minutes to warm up and be ready after the first request.\nRef link: https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Llama-70B",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "deepseek-r1-0528": {
    "provider": "Vertex AI",
    "litellm_provider": "vertex_ai",
    "mode": "chat",
    "modality": [
      "Text"
    ],
    "inCost": 1.35,
    "outCost": 5.4,
    "maxTokens": "163.8k",
    "maxInputTokens": 163840,
    "maxOutputTokens": 32768,
    "releaseDate": "2025-05-28",
    "desc": "DeepSeek-R1 0528 - Advanced reasoning model with large-scale RL training.\nPerformance comparable to OpenAI o1 across math, code, and reasoning tasks.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "deepseek-v3.1": {
    "provider": "Vertex AI",
    "litellm_provider": "vertex_ai",
    "mode": "chat",
    "modality": [
      "Text"
    ],
    "inCost": 0.6,
    "outCost": 1.7,
    "maxTokens": "163.8k",
    "maxInputTokens": 163840,
    "maxOutputTokens": 32768,
    "releaseDate": "2025-08-15",
    "desc": "DeepSeek-V3.1 hybrid model supporting both thinking and non-thinking modes.\n671B total parameters with 37B activated. Enhanced tool calling and agent capabilities.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "deepseek-v3.2": {
    "provider": "Vertex AI",
    "litellm_provider": "vertex_ai",
    "mode": "chat",
    "modality": [
      "Text"
    ],
    "inCost": 0.56,
    "outCost": 1.68,
    "maxTokens": "128k",
    "maxInputTokens": 128000,
    "maxOutputTokens": 65536,
    "releaseDate": "2025-12-01",
    "desc": "DeepSeek-V3.2 combines high computational efficiency with strong reasoning and agent capabilities through several key technical innovations. \nIts core advances include DeepSeek Sparse Attention for efficient long-context processing and a scalable reinforcement learning framework, enabling performance comparable to GPT-5, with a high-compute variant surpassing it and matching Gemini-3.0-Pro in reasoning. \nAdditionally, a large-scale agentic task synthesis pipeline enhances tool-use generalization, contributing to gold-medal-level results in the 2025 IMO and IOI.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "deepseek-v4-pro": {
    "provider": "Azure Foundry",
    "litellm_provider": "azure",
    "mode": "chat",
    "modality": [
      "Text"
    ],
    "inCost": 1.74,
    "outCost": 3.48,
    "maxTokens": "1M",
    "maxInputTokens": 1000000,
    "maxOutputTokens": 384000,
    "releaseDate": "2026-04-23",
    "desc": "DeepSeek-V4-Pro is a 1.6T-parameter Mixture-of-Experts model (49B activated) with a 1M token context window.\nFeatures three reasoning modes (Non-Think, Think High, Think Max), optimized for coding, mathematics, and agentic tool-use tasks.",
    "health": {
      "total": 2,
      "online": 2
    }
  },
  "deepseek-v4-flash": {
    "provider": "Azure Foundry",
    "litellm_provider": "azure",
    "mode": "chat",
    "modality": [
      "Text"
    ],
    "inCost": 0.19,
    "outCost": 0.51,
    "maxTokens": "1M",
    "maxInputTokens": 1000000,
    "maxOutputTokens": 384000,
    "releaseDate": "2026-04-23",
    "desc": "DeepSeek-V4-Flash is an efficient Mixture-of-Experts model with 284B total parameters and 13B activated, optimized for low latency and high-throughput. Features a 1M token context and a hybrid attention architecture (CSA + HCA) for improved long-context efficiency. Ideal for real-time and cost-sensitive applications.",
    "health": {
      "total": 5,
      "online": 5
    }
  },
  "gemini-2.5-flash": {
    "provider": "Vertex AI",
    "litellm_provider": "vertex_ai",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 0.15,
    "outCost": 0.6,
    "maxTokens": "1.05M",
    "maxInputTokens": 1048576,
    "maxOutputTokens": 64000,
    "releaseDate": "2025-06-15",
    "desc": "Gemini 2.5 Flash: best for balancing reasoning and speed.\nGemini 2.5 series are thinking models, capable of reasoning through their thoughts before responding, resulting in enhanced performance and improved accuracy.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "gemini-2.5-pro": {
    "provider": "Vertex AI",
    "litellm_provider": "vertex_ai",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 1.25,
    "outCost": 10,
    "maxTokens": "1.05M",
    "maxInputTokens": 1048576,
    "maxOutputTokens": 65536,
    "releaseDate": "2025-06-15",
    "desc": "Gemini 2.5 Pro delivers the strongest model quality, especially for code and world knowledge. It features a 1M token context window.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "gemini-3-flash": {
    "provider": "Vertex AI",
    "litellm_provider": "vertex_ai",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 0.5,
    "outCost": 3,
    "maxTokens": "1.05M",
    "maxInputTokens": 1048576,
    "maxOutputTokens": 65536,
    "releaseDate": "2026-01-15",
    "desc": "Gemini 3 Flash combines Gemini 3 Pro's reasoning capabilities with the Flash line's levels on latency, efficiency, and cost. It not only enables everyday tasks with improved reasoning, but is designed to tackle the most complex agentic workflows.",
    "health": {
      "total": 4,
      "online": 4
    }
  },
  "gemini-3.1-pro": {
    "provider": "Vertex AI",
    "litellm_provider": "vertex_ai",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 2,
    "outCost": 12,
    "maxTokens": "1.05M",
    "maxInputTokens": 1048576,
    "maxOutputTokens": 65536,
    "releaseDate": "2026-03-01",
    "desc": "Gemini 3.1 Pro provides better thinking, improved token efficiency, and a more grounded, factually consistent experience. It's optimized for software engineering behavior and usability, as well as agentic workflows requiring precise tool usage and reliable multi-step execution across real-world domains",
    "health": {
      "total": 5,
      "online": 5
    }
  },
  "gemini-3.1-flash-lite": {
    "provider": "Vertex AI",
    "litellm_provider": "vertex_ai",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 0.25,
    "outCost": 1.5,
    "maxTokens": "1.05M",
    "maxInputTokens": 1048576,
    "maxOutputTokens": 65536,
    "releaseDate": "2026-03-01",
    "desc": "Gemini 3.1 Flash-Lite is our most cost-efficient Gemini model, optimized for low latency use cases for high-volume, cost-sensitive LLM traffic",
    "health": {
      "total": 5,
      "online": 5
    }
  },
  "gemini-3.5-flash": {
    "provider": "Vertex AI",
    "litellm_provider": "vertex_ai",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision",
      "Video",
      "Audio"
    ],
    "inCost": 1.5,
    "outCost": 9,
    "maxTokens": "1.05M",
    "maxInputTokens": 1048576,
    "maxOutputTokens": 65536,
    "releaseDate": "2026-04-10",
    "desc": "Gemini 3.5 Flash: best for frontier performance across agents and coding.\nAdvanced reasoning at Flash-level latency and scale, optimized for agentic workflows and iterative coding.",
    "health": {
      "total": 5,
      "online": 5
    }
  },
  "gemini-3.5-flash-lite": {
    "provider": "Vertex AI",
    "litellm_provider": "vertex_ai",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision",
      "Video",
      "Audio"
    ],
    "inCost": 0.3,
    "outCost": 2.5,
    "maxTokens": "1.05M",
    "maxInputTokens": 1048576,
    "maxOutputTokens": 65536,
    "releaseDate": "2026-04-10",
    "desc": "Gemini 3.5 Flash-Lite is the fastest, lowest-cost model in the 3.5 family, optimized for high-throughput, low-latency execution of subagent tasks and document parsing across text, image, video, and audio inputs.",
    "health": {
      "total": 5,
      "online": 5
    }
  },
  "gemini-3.6-flash": {
    "provider": "Vertex AI",
    "litellm_provider": "vertex_ai",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision",
      "Video",
      "Audio"
    ],
    "inCost": 1.5,
    "outCost": 7.5,
    "maxTokens": "1.05M",
    "maxInputTokens": 1048576,
    "maxOutputTokens": 65536,
    "releaseDate": "2026-05-15",
    "desc": "Gemini 3.6 Flash offers stronger performance on complex agentic and multimodal tasks while reducing token usage, at a lower price point than Gemini 3.5 Flash. Features improved code generation, reduced action bias, and better multimodal reasoning for charts and visual layouts.",
    "health": {
      "total": 5,
      "online": 5
    }
  },
  "gemini-3.7-flash": {
    "provider": "Vertex AI",
    "litellm_provider": "vertex_ai",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision",
      "Video",
      "Audio"
    ],
    "inCost": 0.75,
    "outCost": 3.75,
    "maxTokens": "1.05M",
    "maxInputTokens": 1048576,
    "maxOutputTokens": 65536,
    "releaseDate": "2026-06-20",
    "desc": "Gemini 3.7 Flash is the high-efficiency, cost-effective powerhouse of the Gemini 3 family. It delivers Pro-level agentic capabilities, major leaps in code generation and terminal execution.\nGemini 3.7 Flash serves as the primary agentic workhorse in the Gemini 3 family, bridging the gap between deep-reasoning Pro models and high-throughput Flash-Lite models while delivering high token efficiency and multi-step multimodal processing.",
    "health": {
      "total": 4,
      "online": 4
    }
  },
  "glm-5.2-dbs": {
    "provider": "Databricks",
    "litellm_provider": "databricks",
    "mode": "chat",
    "modality": [
      "Text"
    ],
    "inCost": 0.924,
    "outCost": 2.904,
    "maxTokens": "1M",
    "maxInputTokens": 1000000,
    "maxOutputTokens": 64000,
    "releaseDate": "2025-12-11",
    "desc": "GLM-5.2 is Z.AI's flagship foundation model engineered for long-horizon agentic coding and software engineering tasks.\nFeatures a 1M-token context window and 128K output tokens, delivering top open-source benchmark performance.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "gpt-3.5-turbo": {
    "provider": "Azure Foundry",
    "litellm_provider": "azure",
    "mode": "chat",
    "modality": [
      "Text"
    ],
    "inCost": 0.5,
    "outCost": 1.5,
    "maxTokens": "4.1k",
    "maxInputTokens": 4097,
    "maxOutputTokens": 4096,
    "releaseDate": "2023-06-13",
    "desc": "GPT-3.5-Turbo can be used for a variety of tasks, including text generation and more.",
    "health": {
      "total": 2,
      "online": 2
    }
  },
  "gpt-4.1": {
    "provider": "Azure Foundry",
    "litellm_provider": "azure",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 2,
    "outCost": 8,
    "maxTokens": "1M",
    "maxInputTokens": 1000000,
    "maxOutputTokens": 1000000,
    "releaseDate": "2025-04-14",
    "desc": "The gpt-4.1 is most powerful model in the gpt-4.1 series, designed for complex tasks like coding and understanding long documents.\nThis model is ideal for advanced applications that require deep reasoning and precision.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "gpt-4.1-mini": {
    "provider": "Azure Foundry",
    "litellm_provider": "azure",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 0.4,
    "outCost": 1.6,
    "maxTokens": "1M",
    "maxInputTokens": 1000000,
    "maxOutputTokens": 1000000,
    "releaseDate": "2025-04-14",
    "desc": "The gpt-4.1-mini balances performance and cost in the gpt-4.1 series, making it suitable for a wide range of applications.\nThis model is great for developers seeking efficiency without compromising too much on capabilities.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "gpt-4.1-nano": {
    "provider": "Azure Foundry",
    "litellm_provider": "azure",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 0.1,
    "outCost": 0.4,
    "maxTokens": "1M",
    "maxInputTokens": 1000000,
    "maxOutputTokens": 1000000,
    "releaseDate": "2025-04-14",
    "desc": "The gpt-4.1-nano is the fastest and most cost-effective model in the gpt-4.1 series.\nThis model is perfect for scenarios where quick responses are more critical than detailed reasoning.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "gpt-4o": {
    "provider": "Azure Foundry",
    "litellm_provider": "azure",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 5,
    "outCost": 15,
    "maxTokens": "128k",
    "maxInputTokens": 128000,
    "maxOutputTokens": 4096,
    "releaseDate": "2024-05-13",
    "desc": "⭐⭐⭐⭐ GPT-4o can be used for a variety of tasks,  including text generation, image recognition, and more.",
    "health": {
      "total": 3,
      "online": 3
    }
  },
  "gpt-4-turbo": {
    "provider": "Azure Foundry",
    "litellm_provider": "azure",
    "mode": "chat",
    "modality": [
      "Text"
    ],
    "inCost": 10,
    "outCost": 30,
    "maxTokens": "128k",
    "maxInputTokens": 128000,
    "maxOutputTokens": 4096,
    "releaseDate": "2024-04-09",
    "desc": "GPT-4-Turbo can be used for a variety of tasks, including text generation and more.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "gpt-5": {
    "provider": "Azure Foundry",
    "litellm_provider": "azure",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 1.25,
    "outCost": 10,
    "maxTokens": "400k",
    "maxInputTokens": 400000,
    "maxOutputTokens": 128000,
    "releaseDate": "2025-08-07",
    "desc": "gpt-5 provides deeper, richer reasoning for analytics and code generation capabilities.",
    "health": {
      "total": 2,
      "online": 2
    }
  },
  "gpt-5-mini": {
    "provider": "Azure Foundry",
    "litellm_provider": "azure",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 0.25,
    "outCost": 2,
    "maxTokens": "400k",
    "maxInputTokens": 400000,
    "maxOutputTokens": 128000,
    "releaseDate": "2025-08-07",
    "desc": "gpt-5-mini powers low cost and fast experiences such as real-time agents, orchestrating tool calls in response to customer support requests.",
    "health": {
      "total": 2,
      "online": 2
    }
  },
  "gpt-5-nano": {
    "provider": "Azure Foundry",
    "litellm_provider": "azure",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 0.05,
    "outCost": 0.4,
    "maxTokens": "400k",
    "maxInputTokens": 400000,
    "maxOutputTokens": 128000,
    "releaseDate": "2025-08-07",
    "desc": "gpt-5-nano is a new class of reasoning model focuses on speed and efficiency with reasoning power for rich question and responses.",
    "health": {
      "total": 2,
      "online": 2
    }
  },
  "gpt-5.1": {
    "provider": "Azure Foundry",
    "litellm_provider": "azure",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 1.25,
    "outCost": 10,
    "maxTokens": "400k",
    "maxInputTokens": 400000,
    "maxOutputTokens": 128000,
    "releaseDate": "2025-11-13",
    "desc": "GPT-5.1 is our flagship model for coding and agentic tasks with configurable reasoning and non-reasoning effort",
    "health": {
      "total": 2,
      "online": 2
    }
  },
  "gpt-5.2": {
    "provider": "Azure Foundry",
    "litellm_provider": "azure",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 1.75,
    "outCost": 14,
    "maxTokens": "400k",
    "maxInputTokens": 400000,
    "maxOutputTokens": 128000,
    "releaseDate": "2025-12-11",
    "desc": "GPT-5.2 is our best general-purpose model, part of the GPT-5 flagship model family. Our most intelligent model yet for both general and agentic tasks",
    "health": {
      "total": 2,
      "online": 2
    }
  },
  "gpt-5.4": {
    "provider": "Azure Foundry",
    "litellm_provider": "azure",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 2.5,
    "outCost": 15,
    "maxTokens": "1.05M",
    "maxInputTokens": 1050000,
    "maxOutputTokens": 128000,
    "releaseDate": "2026-03-05",
    "desc": "GPT-5.4 is our frontier model for complex professional work. Learn more in our latest model guide. Reasoning.effort supports: none (default), low, medium, high and xhigh.",
    "health": {
      "total": 2,
      "online": 2
    }
  },
  "gpt-5.4-nano": {
    "provider": "Azure Foundry",
    "litellm_provider": "azure",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 0.2,
    "outCost": 1.25,
    "maxTokens": "400k",
    "maxInputTokens": 400000,
    "maxOutputTokens": 128000,
    "releaseDate": "2026-03-17",
    "desc": "Our cheapest GPT-5.4-class model for simple high-volume tasks including classification, data extraction, ranking, and sub-agents.",
    "health": {
      "total": 2,
      "online": 2
    }
  },
  "gpt-5.4-mini": {
    "provider": "Azure Foundry",
    "litellm_provider": "azure",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 0.75,
    "outCost": 4.5,
    "maxTokens": "400k",
    "maxInputTokens": 400000,
    "maxOutputTokens": 128000,
    "releaseDate": "2026-03-17",
    "desc": "Our strongest mini model yet for coding, computer use, and subagents designed for high-volume workloads with faster, more efficient performance.",
    "health": {
      "total": 2,
      "online": 2
    }
  },
  "gpt-5.5": {
    "provider": "Azure Foundry",
    "litellm_provider": "azure",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 5,
    "outCost": 30,
    "maxTokens": "1.05M",
    "maxInputTokens": 1050000,
    "maxOutputTokens": 128000,
    "releaseDate": "2026-04-24",
    "desc": "GPT-5.5 is a new class of intelligence for coding and professional work, designed for complex professional tasks with advanced reasoning capabilities. Reasoning.effort supports: none (default), low, medium, high and xhigh.",
    "health": {
      "total": 3,
      "online": 3
    }
  },
  "gpt-5.6-luna": {
    "provider": "Azure Foundry",
    "litellm_provider": "azure",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 0.2,
    "outCost": 1.2,
    "maxTokens": "1.05M",
    "maxInputTokens": 1050000,
    "maxOutputTokens": 128000,
    "releaseDate": "2026-07-09",
    "desc": "GPT-5.6 Luna is the fastest and most affordable model in the GPT-5.6 family, making it well suited to high-volume, latency-sensitive workloads. Reasoning-capable with function calling and vision.",
    "health": {
      "total": 3,
      "online": 3
    }
  },
  "gpt-5.6-sol": {
    "provider": "Azure Foundry",
    "litellm_provider": "azure",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 5,
    "outCost": 30,
    "maxTokens": "1.05M",
    "maxInputTokens": 1050000,
    "maxOutputTokens": 128000,
    "releaseDate": "2026-07-09",
    "desc": "GPT-5.6 Sol delivers the most advanced reasoning capabilities in the GPT-5.6 family, supporting extended reasoning, agentic workflows, and code-focused scenarios for the most demanding enterprise workloads.",
    "health": {
      "total": 3,
      "online": 3
    }
  },
  "gpt-5.6-terra": {
    "provider": "Azure Foundry",
    "litellm_provider": "azure",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 2,
    "outCost": 12,
    "maxTokens": "1.05M",
    "maxInputTokens": 1050000,
    "maxOutputTokens": 128000,
    "releaseDate": "2026-07-09",
    "desc": "GPT-5.6 Terra is a balanced model for everyday work, delivering performance competitive with GPT-5.5 at a lower cost, making it ideal for scaling intelligent applications across the enterprise.",
    "health": {
      "total": 3,
      "online": 3
    }
  },
  "gpt-chat-latest": {
    "provider": "Azure Foundry",
    "litellm_provider": "azure",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 5,
    "outCost": 30,
    "maxTokens": "400k",
    "maxInputTokens": 400000,
    "maxOutputTokens": 16384,
    "releaseDate": "2026-05-05",
    "desc": "gpt-chat-latest points to the latest GPT-5.5 Instant chat snapshot currently used in ChatGPT. We recommend GPT-5.5 for production API usage; use this model to test the latest improvements for chat use cases. The underlying model snapshot will be regularly updated.",
    "health": {
      "total": 2,
      "online": 2
    }
  },
  "gpt-audio-1.5": {
    "provider": "Azure Foundry",
    "litellm_provider": "azure",
    "mode": "chat",
    "modality": [
      "Text",
      "Audio"
    ],
    "inCost": 2.5,
    "outCost": 10,
    "maxTokens": "128k",
    "maxInputTokens": 128000,
    "maxOutputTokens": 16384,
    "releaseDate": "2026-02-23",
    "desc": "The gpt-audio model is our first generally available audio model. It accepts audio inputs and outputs, and can be used in the Chat Completions REST API.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "gpt-oss-20b": {
    "provider": "AWS Bedrock",
    "litellm_provider": "bedrock",
    "mode": "chat",
    "modality": [
      "Text"
    ],
    "inCost": 0.07,
    "outCost": 0.3,
    "maxTokens": "128k",
    "maxInputTokens": 128000,
    "maxOutputTokens": 4096,
    "releaseDate": "2025-01-01",
    "desc": "GPT OSS 20B (AWS) - OpenAI's open-weight model for lower latency and specialized use cases.\n21B parameters with 3.6B active parameters. Uses harmony response format for reasoning.\nAWS Bedrock version for better compatibility.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "gpt-oss-120b": {
    "provider": "AWS Bedrock",
    "litellm_provider": "bedrock",
    "mode": "chat",
    "modality": [
      "Text"
    ],
    "inCost": 0.15,
    "outCost": 0.6,
    "maxTokens": "128k",
    "maxInputTokens": 128000,
    "maxOutputTokens": 4096,
    "releaseDate": "2025-01-01",
    "desc": "GPT OSS 120B (AWS) - OpenAI's open-weight model for production, general purpose, high reasoning use cases.\n117B parameters with 5.1B active parameters. Uses harmony response format for reasoning.\nAWS Bedrock version for better compatibility.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "gpt-5.5-aws": {
    "provider": "AWS Bedrock",
    "litellm_provider": "openai",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 5.5,
    "outCost": 33,
    "maxTokens": "272k",
    "maxInputTokens": 272000,
    "maxOutputTokens": 128000,
    "releaseDate": "2026-04-24",
    "desc": "GPT-5.5 is a new class of intelligence for coding and professional work, designed for complex professional tasks with advanced reasoning capabilities. Reasoning.effort supports: none (default), low, medium, high and xhigh.",
    "health": {
      "total": 3,
      "online": 1
    }
  },
  "llama4-maverick-17b-aws": {
    "provider": "AWS Bedrock",
    "litellm_provider": "bedrock",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 0.24,
    "outCost": 0.97,
    "maxTokens": "128k",
    "maxInputTokens": 128000,
    "maxOutputTokens": 128000,
    "releaseDate": "2025-05-01",
    "desc": "Llama 4 Maverick 17B-128E is Llama 4's largest and most capable model.\nIt uses the Mixture-of-Experts (MoE) architecture and early fusion to provide coding, reasoning, and image capabilities.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "llama4-maverick-17b": {
    "provider": "Vertex AI",
    "litellm_provider": "vertex_ai",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 0.24,
    "outCost": 0.97,
    "maxTokens": "128k",
    "maxInputTokens": 128000,
    "maxOutputTokens": 128000,
    "releaseDate": "2025-05-01",
    "desc": "Llama 4 Maverick 17B-128E is Llama 4's largest and most capable model.\nIt uses the Mixture-of-Experts (MoE) architecture and early fusion to provide coding, reasoning, and image capabilities.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "llama4-scout-17b-aws": {
    "provider": "AWS Bedrock",
    "litellm_provider": "bedrock",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 0.17,
    "outCost": 0.66,
    "maxTokens": "10M",
    "maxInputTokens": 10000000,
    "maxOutputTokens": 10000000,
    "releaseDate": "2025-05-01",
    "desc": "Llama 4 Scout 17B-16E is a multmodal model that uses the Mixture-of-Experts (MoE) architecture and early fusion, delivering state-of-the-art results for its size class.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "llama4-scout-17b": {
    "provider": "Vertex AI",
    "litellm_provider": "vertex_ai",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 0.17,
    "outCost": 0.66,
    "maxTokens": "10M",
    "maxInputTokens": 10000000,
    "maxOutputTokens": 10000000,
    "releaseDate": "2025-05-01",
    "desc": "Llama 4 Scout 17B-16E is a multmodal model that uses the Mixture-of-Experts (MoE) architecture and early fusion, delivering state-of-the-art results for its size class.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "mistral-7b": {
    "provider": "AWS Bedrock",
    "litellm_provider": "bedrock",
    "mode": "chat",
    "modality": [
      "Text"
    ],
    "inCost": 0.15,
    "outCost": 0.2,
    "maxTokens": "32k",
    "maxInputTokens": 32000,
    "maxOutputTokens": 8191,
    "releaseDate": "2025-01-01",
    "desc": "mistral-7b is for Text generation",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "mixtral-8x7b": {
    "provider": "AWS Bedrock",
    "litellm_provider": "bedrock",
    "mode": "chat",
    "modality": [
      "Text"
    ],
    "inCost": 0.45,
    "outCost": 0.7,
    "maxTokens": "32k",
    "maxInputTokens": 32000,
    "maxOutputTokens": 8191,
    "releaseDate": "2025-01-01",
    "desc": "mixtral-8x7b is for Text generation",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "mistral-large": {
    "provider": "AWS Bedrock",
    "litellm_provider": "bedrock",
    "mode": "chat",
    "modality": [
      "Text"
    ],
    "inCost": 8,
    "outCost": 24,
    "maxTokens": "128k",
    "maxInputTokens": 32000,
    "maxOutputTokens": 8191,
    "releaseDate": "2025-01-01",
    "desc": "mistral-large is for Text generation",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "mistral-large-3-aws": {
    "provider": "AWS Bedrock",
    "litellm_provider": "bedrock",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 0.5,
    "outCost": 1.5,
    "maxTokens": "256k",
    "maxInputTokens": 256000,
    "maxOutputTokens": 256000,
    "releaseDate": "2025-01-01",
    "desc": "Mistral Large 3 is our most advanced open-weight multimodal model, combining a granular Mixture-of-Experts architecture (673B total parameters with 39B active, \nplus a 2.5B vision encoder) and a 256k context window to deliver state-of-the-art reliability, long-context reasoning, and agentic performance for production assistants, RAG systems, scientific workloads, and complex enterprise applications.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "mistral-3-3b-aws": {
    "provider": "AWS Bedrock",
    "litellm_provider": "bedrock",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 0.1,
    "outCost": 0.1,
    "maxTokens": "256k",
    "maxInputTokens": 256000,
    "maxOutputTokens": 256000,
    "releaseDate": "2025-01-01",
    "desc": "Ministral 3 3B is the smallest and most efficient model in the Ministral 3 family, offering robust language and vision capabilities in a compact package for edge and low-resource deployment.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "mistral-3-8b-aws": {
    "provider": "AWS Bedrock",
    "litellm_provider": "bedrock",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 0.15,
    "outCost": 0.15,
    "maxTokens": "256k",
    "maxInputTokens": 256000,
    "maxOutputTokens": 256000,
    "releaseDate": "2025-01-01",
    "desc": "Ministral 3 8B is a powerful and efficient model offering best-in-class text and vision capabilities, optimized for edge deployment and single-GPU operation",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "mistral-3-14b-aws": {
    "provider": "AWS Bedrock",
    "litellm_provider": "bedrock",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 0.2,
    "outCost": 0.2,
    "maxTokens": "256k",
    "maxInputTokens": 256000,
    "maxOutputTokens": 256000,
    "releaseDate": "2025-01-01",
    "desc": "Ministral 3 14B is the largest model in the Ministral 3 family, optimized for local deployment and offering advanced multimodal capabilities with practical single-GPU requirements.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "nova-micro": {
    "provider": "AWS Bedrock",
    "litellm_provider": "bedrock",
    "mode": "chat",
    "modality": [
      "Text"
    ],
    "inCost": 0.035,
    "outCost": 0.14,
    "maxTokens": "128k",
    "maxInputTokens": 128000,
    "maxOutputTokens": 10000,
    "releaseDate": "2025-01-01",
    "desc": "Amazon Nova Micro is a text-only model that delivers the lowest latency responses at very low cost.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "nova-lite": {
    "provider": "AWS Bedrock",
    "litellm_provider": "bedrock",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 0.06,
    "outCost": 0.24,
    "maxTokens": "300k",
    "maxInputTokens": 300000,
    "maxOutputTokens": 10000,
    "releaseDate": "2025-01-01",
    "desc": "Amazon Nova Lite is a very low-cost multimodal model that is lightning fast for processing image, video, and text inputs to generate text outputs.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "nova-pro": {
    "provider": "AWS Bedrock",
    "litellm_provider": "bedrock",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 0.8,
    "outCost": 3.2,
    "maxTokens": "300k",
    "maxInputTokens": 300000,
    "maxOutputTokens": 10000,
    "releaseDate": "2025-01-01",
    "desc": "Amazon Nova Pro is a highly capable multimodal model and our best combination of accuracy, speed, and cost for a wide range of tasks.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "nova-premier": {
    "provider": "AWS Bedrock",
    "litellm_provider": "bedrock",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 2.5,
    "outCost": 12.5,
    "maxTokens": "1M",
    "maxInputTokens": 1000000,
    "maxOutputTokens": 10000,
    "releaseDate": "2025-01-01",
    "desc": "Amazon Nova Premier is our most capable multimodal model for complex tasks and our best teacher for distilling custom models for cost-effective applications.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "o1": {
    "provider": "Azure Foundry",
    "litellm_provider": "azure",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 15,
    "outCost": 60,
    "maxTokens": "200k",
    "maxInputTokens": 200000,
    "maxOutputTokens": 100000,
    "releaseDate": "2024-12-17",
    "desc": "The most capable model in the o1 series, offering enhanced reasoning abilities.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "o1-mini": {
    "provider": "Azure Foundry",
    "litellm_provider": "azure",
    "mode": "chat",
    "modality": [
      "Text"
    ],
    "inCost": 1.21,
    "outCost": 4.84,
    "maxTokens": "128k",
    "maxInputTokens": 128000,
    "maxOutputTokens": 65536,
    "releaseDate": "2024-09-12",
    "desc": "The faster and more cost-effective option in the o1 series, ideal for coding tasks that require speed and lower resource consumption. Reference link: https://openai.com/index/openai-o1-mini-advancing-cost-efficient-reasoning/",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "o3-mini": {
    "provider": "Azure Foundry",
    "litellm_provider": "azure",
    "mode": "chat",
    "modality": [
      "Text"
    ],
    "inCost": 1.1,
    "outCost": 4.4,
    "maxTokens": "200k",
    "maxInputTokens": 200000,
    "maxOutputTokens": 100000,
    "releaseDate": "2025-01-31",
    "desc": "🎉✨ o1 and o3 Series Models: Enhanced Reasoning and Problem Solving on Azure\nThe o1 and o3 series models are specifically designed to tackle reasoning and problem-solving tasks with increased focus and capability. These models spend more time processing and understanding the user's request, making them exceptionally strong in areas like science, coding, math and similar fields. For example, o1 can be used by healthcare researchers to annotate cell sequencing data, by physicists to generate complicated mathematical formulas needed for quantum optics, and by developers in all fields to build and execute multi-step workflows.\nKey Capabilities of these models\no1 added advanced image analysis capabilities with the new version. Enhance your prompts and context with images for additional insights.\no3-mini follows o1 mini but adds the features supported by o1 like function calling and tools.\nComplex Code Generation: Capable of generating algorithms and handling advanced coding tasks to support developers.\nAdvanced Problem Solving: Ideal for comprehensive brainstorming sessions and addressing multifaceted challenges.\nComplex Document Comparison: Perfect for analyzing contracts, case files, or legal documents to identify subtle differences.\nInstruction Following and Workflow Management: Particularly effective for managing workflows requiring shorter contexts.\nFeatures and properties supported in o3-mini model\nSupports both System message and the new Developer message to improve upgrade experience.\nReasoning effort as in high, medium, and low. It controls whether the model thinks \\\"less\\\" or \\\"more\\\" in terms of applying cognitive reasoning.\nStructured outputs and functions/tools.\n⚙️ Model Options\n• 🚀 o1 Most powerful, full reasoning capability\n• ⚡ o1-mini Fast & cost-efficient for coding\n• 💪 o3-mini Balance of features & efficiency\n⚠️ Note  o1 has some feature limitations compared to other models.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "qwen3.5-27b-gmi-ray": {
    "provider": "TrendMicro",
    "litellm_provider": "trendmicro",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 0,
    "outCost": 0,
    "maxTokens": "262.1k",
    "maxInputTokens": 262144,
    "maxOutputTokens": 262144,
    "releaseDate": "2026-01-10",
    "desc": "Qwen3.5-27B (TrendMicro) - 27B-parameter multimodal language model with hybrid architecture featuring Gated Delta Networks and sparse MoE. Supports 262K context, vision (images/video), function calling, and 201 languages.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "qwen3.6-35b-a3b-gmi-ray": {
    "provider": "TrendMicro",
    "litellm_provider": "trendmicro",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 0,
    "outCost": 0,
    "maxTokens": "262.1k",
    "maxInputTokens": 262144,
    "maxOutputTokens": 262144,
    "releaseDate": "2026-03-15",
    "desc": "Qwen3.6-35B-A3B (TrendMicro) - 35B-parameter (3B active) multimodal MoE model with hybrid Gated DeltaNet + sparse attention architecture. Supports 262K context (extensible to 1M via YaRN), vision (images/video), thinking/non-thinking modes, function calling, and structured output.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "deepseek-v4-flash-0731-gmi-ray": {
    "provider": "TrendMicro",
    "litellm_provider": "trendmicro",
    "mode": "chat",
    "modality": [
      "Text"
    ],
    "inCost": 0,
    "outCost": 0,
    "maxTokens": "393.2k",
    "maxInputTokens": 393216,
    "maxOutputTokens": 393216,
    "releaseDate": "2026-07-31",
    "desc": "DeepSeek-V4-Flash-0731 (TrendMicro) - The official release of DeepSeek-V4-Flash, superseding the preview version, with substantially enhanced agentic capabilities. A sparse MoE model with 284B total parameters and 13B active per token, optimized for code-agent tasks, reasoning, and tool use.\nIf the self-hosted deployment is unavailable, requests may automatically fall back to a paid cloud provider, which will incur usage charges.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "qwen3-coder-480b": {
    "provider": "Vertex AI",
    "litellm_provider": "vertex_ai",
    "mode": "chat",
    "modality": [
      "Text"
    ],
    "inCost": 1,
    "outCost": 4,
    "maxTokens": "262.1k",
    "maxInputTokens": 262144,
    "maxOutputTokens": 32768,
    "releaseDate": "2025-07-01",
    "desc": "Qwen3-Coder 480B - Advanced agentic code model with MoE architecture.\n480B total parameters with 35B active. Supports 256K context, agentic coding, and tool usage.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "qwen3-235b": {
    "provider": "Vertex AI",
    "litellm_provider": "vertex_ai",
    "mode": "chat",
    "modality": [
      "Text"
    ],
    "inCost": 0.25,
    "outCost": 1,
    "maxTokens": "262.1k",
    "maxInputTokens": 262144,
    "maxOutputTokens": 16384,
    "releaseDate": "2025-07-01",
    "desc": "Qwen3-235B 2507 - Large language model with hybrid thinking modes.\n235B total parameters with 22B activated. Supports reasoning and non-thinking modes.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "nvidia-nemotron-nano-3-30b-aws": {
    "provider": "AWS Bedrock",
    "litellm_provider": "bedrock",
    "mode": "chat",
    "modality": [
      "Text"
    ],
    "inCost": 0.06,
    "outCost": 0.24,
    "maxTokens": "256k",
    "maxInputTokens": 256000,
    "maxOutputTokens": 256000,
    "releaseDate": "2025-01-01",
    "desc": "Nvidia Nemotron 3 Nano 30B A3B is an open, 30B‑parameter hybrid Mamba‑Transformer MoE model with about 3B active parameters per token, tuned as a high‑accuracy reasoning and coding assistant. It targets efficient, high‑throughput agents, copilots, and long‑context tools",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "nvidia-nemotron-super-3-120b-aws": {
    "provider": "AWS Bedrock",
    "litellm_provider": "bedrock",
    "mode": "chat",
    "modality": [
      "Text"
    ],
    "inCost": 0.15,
    "outCost": 0.65,
    "maxTokens": "262.1k",
    "maxInputTokens": 262144,
    "maxOutputTokens": 262144,
    "releaseDate": "2025-01-01",
    "desc": "NVIDIA Nemotron 3 Super is a 120B-parameter open hybrid MoE model activating only 12B parameters per token.\nDesigned for complex multi-agent applications with 1M token context window for long-horizon agentic tasks.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "kimi-k2.5-aws": {
    "provider": "AWS Bedrock",
    "litellm_provider": "bedrock",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 0.6,
    "outCost": 3,
    "maxTokens": "262.1k",
    "maxInputTokens": 262144,
    "maxOutputTokens": 262144,
    "releaseDate": "2025-10-10",
    "desc": "Kimi K2.5 is Moonshot AI's multimodal model with improved reasoning, coding, and multilingual capabilities.\nSupports text and image inputs with 128K context window for long-form document processing.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "minimax-m2.5-aws": {
    "provider": "AWS Bedrock",
    "litellm_provider": "bedrock",
    "mode": "chat",
    "modality": [
      "Text"
    ],
    "inCost": 0.3,
    "outCost": 1.2,
    "maxTokens": "196.6k",
    "maxInputTokens": 196608,
    "maxOutputTokens": 196608,
    "releaseDate": "2025-01-01",
    "desc": "MiniMax M2.5 is an agent-native frontier model trained to reason efficiently, decompose tasks optimally, and complete complex workflows.\nAchieves 80.2% on SWE-Bench Verified with token-efficient reasoning via reinforcement learning.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "glm-5-aws": {
    "provider": "AWS Bedrock",
    "litellm_provider": "bedrock",
    "mode": "chat",
    "modality": [
      "Text"
    ],
    "inCost": 1,
    "outCost": 3.2,
    "maxTokens": "202.8k",
    "maxInputTokens": 202752,
    "maxOutputTokens": 202752,
    "releaseDate": "2025-12-01",
    "desc": "GLM-5 is Z.ai's flagship open-source foundation model engineered for complex systems design and long-horizon agent workflows.\nDelivers production-grade performance with advanced agentic planning and deep backend reasoning.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "grok-4": {
    "provider": "Azure Foundry",
    "litellm_provider": "azure",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 3,
    "outCost": 15,
    "maxTokens": "256k",
    "maxInputTokens": 256000,
    "maxOutputTokens": 256000,
    "releaseDate": "2025-11-01",
    "desc": "Grok 4 is the latest reasoning model from xAI with advanced reasoning and tool-use capabilities, enabling it to achieve new state-of-the-art performance across challenging academic and industry benchmarks.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "grok-code-fast-1": {
    "provider": "Azure Foundry",
    "litellm_provider": "azure",
    "mode": "chat",
    "modality": [
      "Text"
    ],
    "inCost": 0.2,
    "outCost": 1.5,
    "maxTokens": "256k",
    "maxInputTokens": 256000,
    "maxOutputTokens": 256000,
    "releaseDate": "2025-11-01",
    "desc": "Grok Code Fast 1 is a fast, economical AI model for agentic coding, built from scratch with a new architecture, trained on programming-rich data, and fine-tuned for real-world coding tasks like bug fixes and project setup.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "grok-4-1-fast-reasoning": {
    "provider": "Azure Foundry",
    "litellm_provider": "azure",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 0.2,
    "outCost": 0.5,
    "maxTokens": "2M",
    "maxInputTokens": 2000000,
    "maxOutputTokens": 2000000,
    "releaseDate": "2025-08-05",
    "desc": "Grok 4.1 Fast is xAI's frontier multimodal model optimized for high-performance agentic tool calling. The reasoning variant uses chain-of-thought analysis for complex, multi-step problems with ~3x hallucination reduction.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "grok-4-1-fast-non-reasoning": {
    "provider": "Azure Foundry",
    "litellm_provider": "azure",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 0.2,
    "outCost": 0.5,
    "maxTokens": "2M",
    "maxInputTokens": 2000000,
    "maxOutputTokens": 2000000,
    "releaseDate": "2025-08-05",
    "desc": "Grok 4.1 Fast is xAI's frontier multimodal model optimized for high-performance agentic tool calling. The non-reasoning variant skips the thinking tokens phase for maximum speed and low latency.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "grok-4-20-reasoning": {
    "provider": "Azure Foundry",
    "litellm_provider": "azure",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 2,
    "outCost": 6,
    "maxTokens": "2M",
    "maxInputTokens": 2000000,
    "maxOutputTokens": 2000000,
    "releaseDate": "2026-04-20",
    "desc": "Grok 4.20 is xAI's latest flagship model built for strong reasoning, multimodal understanding, and enterprise use with advanced instruction following, honesty, and calibration.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "grok-4-20-non-reasoning": {
    "provider": "Azure Foundry",
    "litellm_provider": "azure",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 2,
    "outCost": 6,
    "maxTokens": "2M",
    "maxInputTokens": 2000000,
    "maxOutputTokens": 2000000,
    "releaseDate": "2026-04-20",
    "desc": "Grok 4.20 is xAI's latest flagship model for multimodal understanding and enterprise use. The non-reasoning variant provides direct responses without chain-of-thought processing for faster throughput.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "grok-4.3": {
    "provider": "Azure Foundry",
    "litellm_provider": "azure",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 1.25,
    "outCost": 2.5,
    "maxTokens": "256k",
    "maxInputTokens": 256000,
    "maxOutputTokens": 256000,
    "releaseDate": "2026-06-01",
    "desc": "Grok 4.3 is xAI's latest flagship model designed for agentic systems with improved tool calling, instruction following, and lower hallucination. Supports multimodal analysis across text, images, and diagrams with a 256k context window.",
    "health": {
      "total": 2,
      "online": 2
    }
  },
  "gpt-5-codex": {
    "provider": "Azure Foundry",
    "litellm_provider": "azure",
    "mode": "responses",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 1.25,
    "outCost": 10,
    "maxTokens": "272k",
    "maxInputTokens": 272000,
    "maxOutputTokens": 128000,
    "releaseDate": "2025-09-15",
    "desc": "gpt‑5‑codex is a multimodal, repo-aware coding model built on the gpt‑5 architecture, designed to deliver intelligent, context-rich assistance across IDEs, terminals, and browser-based environments.\nWhether you're reviewing code, automating builds, gpt‑5‑codex brings deep reasoning, seamless tool integration, and visual feedback to your development workflow.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "gpt-5.1-codex": {
    "provider": "Azure Foundry",
    "litellm_provider": "azure",
    "mode": "responses",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 1.25,
    "outCost": 10,
    "maxTokens": "400k",
    "maxInputTokens": 400000,
    "maxOutputTokens": 128000,
    "releaseDate": "2025-11-13",
    "desc": "GPT-5.1-Codex is a version of GPT-5 optimized for agentic coding tasks in Codex or similar environments. It's available in the Responses API only and the underlying model snapshot will be regularly updated.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "gpt-5.1-codex-mini": {
    "provider": "Azure Foundry",
    "litellm_provider": "azure",
    "mode": "responses",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 0.25,
    "outCost": 2,
    "maxTokens": "400k",
    "maxInputTokens": 400000,
    "maxOutputTokens": 128000,
    "releaseDate": "2025-11-13",
    "desc": "GPT-5.1 Codex mini is a smaller, more cost-effective, less-capable version of GPT-5.1-Codex.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "gpt-5.1-codex-max": {
    "provider": "Azure Foundry",
    "litellm_provider": "azure",
    "mode": "responses",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 1.25,
    "outCost": 10,
    "maxTokens": "400k",
    "maxInputTokens": 400000,
    "maxOutputTokens": 128000,
    "releaseDate": "2025-11-13",
    "desc": "GPT-5.1-codex-max is engineered for those who build the future. Imagine tackling complex, long-running projects without losing context or momentum. \nGPT-5.1-codex-max delivers efficiency at scale, cross-platform readiness, and proven performance with top scores on SWE-Bench (77.9), the gold standard for AI coding.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "gpt-5.2-codex": {
    "provider": "Azure Foundry",
    "litellm_provider": "azure",
    "mode": "responses",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 1.75,
    "outCost": 14,
    "maxTokens": "400k",
    "maxInputTokens": 400000,
    "maxOutputTokens": 128000,
    "releaseDate": "2026-01-14",
    "desc": "GPT-5.2-Codex is an upgraded version of GPT-5.2 optimized for agentic coding tasks in Codex or similar environments. GPT-5.2-Codex supports low, medium, high, and xhigh reasoning effort settings. If you want to learn more about prompting GPT-5.2-Codex, refer to our dedicated guide.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "gpt-5.3-codex": {
    "provider": "Azure Foundry",
    "litellm_provider": "azure",
    "mode": "responses",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 1.75,
    "outCost": 14,
    "maxTokens": "400k",
    "maxInputTokens": 400000,
    "maxOutputTokens": 128000,
    "releaseDate": "2026-02-24",
    "desc": "GPT-5.3-Codex is optimized for agentic coding tasks in Codex or similar environments. GPT-5.3-Codex supports low, medium, high, and xhigh reasoning effort settings",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "gpt-5.4-pro": {
    "provider": "Azure Foundry",
    "litellm_provider": "azure",
    "mode": "responses",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 30,
    "outCost": 180,
    "maxTokens": "1.05M",
    "maxInputTokens": 1050000,
    "maxOutputTokens": 128000,
    "releaseDate": "2026-03-05",
    "desc": "OpenAI's most capable frontier model with enhanced reasoning for multi-step tasks. Features native computer use, agentic workflows, and improved coding reliability for professional knowledge work.",
    "health": {
      "total": 2,
      "online": 2
    }
  },
  "gpt-5.6-sol-aws": {
    "provider": "AWS Bedrock",
    "litellm_provider": "openai",
    "mode": "responses",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 5.5,
    "outCost": 33,
    "maxTokens": "272k",
    "maxInputTokens": 272000,
    "maxOutputTokens": 128000,
    "releaseDate": "2026-07-09",
    "desc": "GPT-5.6 Sol delivers the most advanced reasoning capabilities in the GPT-5.6 family, supporting extended reasoning, agentic workflows, and code-focused scenarios for the most demanding enterprise workloads.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "gpt-5.6-terra-aws": {
    "provider": "AWS Bedrock",
    "litellm_provider": "openai",
    "mode": "responses",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 2.2,
    "outCost": 13.2,
    "maxTokens": "272k",
    "maxInputTokens": 272000,
    "maxOutputTokens": 128000,
    "releaseDate": "2026-07-09",
    "desc": "GPT-5.6 Terra is a balanced model for everyday work, delivering performance competitive with GPT-5.5 at a lower cost, making it ideal for scaling intelligent applications across the enterprise.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "gpt-5.6-luna-aws": {
    "provider": "AWS Bedrock",
    "litellm_provider": "openai",
    "mode": "responses",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 0.22,
    "outCost": 1.32,
    "maxTokens": "272k",
    "maxInputTokens": 272000,
    "maxOutputTokens": 128000,
    "releaseDate": "2026-07-09",
    "desc": "GPT-5.6 Luna is the fastest and most affordable model in the GPT-5.6 family, making it well suited to high-volume, latency-sensitive workloads. Reasoning-capable with function calling and vision.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "mock-llm": {
    "provider": "TrendMicro",
    "litellm_provider": "trendmicro",
    "mode": "chat",
    "modality": [
      "Text"
    ],
    "inCost": 0,
    "outCost": 0,
    "maxTokens": null,
    "maxInputTokens": null,
    "maxOutputTokens": null,
    "releaseDate": "2026-01-01",
    "desc": "TrendMicro Mock LLM endpoint for fast latency testing.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "text-embedding-ada-002": {
    "provider": "Azure Foundry",
    "litellm_provider": "azure",
    "mode": "embedding",
    "modality": [
      "Embedding"
    ],
    "inCost": 0.1,
    "outCost": 0,
    "maxTokens": "8.2k",
    "maxInputTokens": 8191,
    "maxOutputTokens": null,
    "releaseDate": "2022-12-15",
    "desc": "text-embedding-ada-002 is the Embedding AI model.",
    "health": {
      "total": 2,
      "online": 2
    }
  },
  "text-embedding-3-small": {
    "provider": "Azure Foundry",
    "litellm_provider": "azure",
    "mode": "embedding",
    "modality": [
      "Embedding"
    ],
    "inCost": 0.02,
    "outCost": 0,
    "maxTokens": "8.2k",
    "maxInputTokens": 8191,
    "maxOutputTokens": null,
    "releaseDate": "2024-01-25",
    "desc": "text-embedding-3-small is the Embedding AI model.",
    "health": {
      "total": 5,
      "online": 5
    }
  },
  "text-embedding-3-large": {
    "provider": "Azure Foundry",
    "litellm_provider": "azure",
    "mode": "embedding",
    "modality": [
      "Embedding"
    ],
    "inCost": 0.13,
    "outCost": 0,
    "maxTokens": "8.2k",
    "maxInputTokens": 8191,
    "maxOutputTokens": null,
    "releaseDate": "2024-01-25",
    "desc": "text-embedding-3-large is the Embedding AI model.",
    "health": {
      "total": 4,
      "online": 4
    }
  },
  "gemini-embedding-001": {
    "provider": "Vertex AI",
    "litellm_provider": "vertex_ai",
    "mode": "embedding",
    "modality": [
      "Embedding"
    ],
    "inCost": 0.15,
    "outCost": 0,
    "maxTokens": "3.1k",
    "maxInputTokens": 2048,
    "maxOutputTokens": null,
    "releaseDate": "2024-05-01",
    "desc": "Gemini Embeddings is a natural language processing technique that converts textual data into numerical vectors that can be processed by machine learning algorithms, especially large models.",
    "health": {
      "total": 5,
      "online": 5
    }
  },
  "gemini-embedding-2-preview": {
    "provider": "Vertex AI",
    "litellm_provider": "vertex_ai",
    "mode": "embedding",
    "modality": [
      "Embedding"
    ],
    "inCost": 0.2,
    "outCost": 0,
    "maxTokens": "8.2k",
    "maxInputTokens": 8192,
    "maxOutputTokens": null,
    "releaseDate": "2025-11-20",
    "desc": "Google's first natively multimodal embedding model. Maps text, images, video, audio, and PDFs into a unified embedding space for advanced semantic search and RAG systems.",
    "health": {
      "total": 5,
      "online": 5
    }
  },
  "gpt-4o-mini-tts": {
    "provider": "Azure Foundry",
    "litellm_provider": "azure",
    "mode": "audio_speech",
    "modality": [
      "Voice"
    ],
    "inCost": 0.6,
    "outCost": 10,
    "maxTokens": "N/A",
    "maxInputTokens": null,
    "maxOutputTokens": null,
    "releaseDate": "2025-03-20",
    "desc": "gpt-4o-mini-tts is for Text to speech",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "tts-1": {
    "provider": "Azure Foundry",
    "litellm_provider": "azure",
    "mode": "audio_speech",
    "modality": [
      "Voice"
    ],
    "inCost": 0,
    "outCost": 0,
    "maxTokens": "N/A",
    "maxInputTokens": null,
    "maxOutputTokens": null,
    "releaseDate": "2023-11-06",
    "desc": "tts-1 is for Text to speech",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "tts-1-hd": {
    "provider": "Azure Foundry",
    "litellm_provider": "azure",
    "mode": "audio_speech",
    "modality": [
      "Voice"
    ],
    "inCost": 0,
    "outCost": 0,
    "maxTokens": "N/A",
    "maxInputTokens": null,
    "maxOutputTokens": null,
    "releaseDate": "2023-11-06",
    "desc": "tts-1-hd is for Text to speech",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "gpt-4o-mini-transcribe": {
    "provider": "Azure Foundry",
    "litellm_provider": "azure",
    "mode": "audio_transcription",
    "modality": [
      "Voice"
    ],
    "inCost": 1.25,
    "outCost": 5,
    "maxTokens": "16k",
    "maxInputTokens": 16000,
    "maxOutputTokens": 2000,
    "releaseDate": "2025-03-20",
    "desc": "gpt-4o-mini-transcribe is for Speech to text",
    "health": {
      "total": 2,
      "online": 2
    }
  },
  "gpt-4o-transcribe": {
    "provider": "Azure Foundry",
    "litellm_provider": "azure",
    "mode": "audio_transcription",
    "modality": [
      "Voice"
    ],
    "inCost": 2.5,
    "outCost": 10,
    "maxTokens": "16k",
    "maxInputTokens": 16000,
    "maxOutputTokens": 2000,
    "releaseDate": "2025-03-20",
    "desc": "gpt-4o-transcribe is for Speech to text",
    "health": {
      "total": 2,
      "online": 2
    }
  },
  "gpt-4o-transcribe-diarize": {
    "provider": "Azure Foundry",
    "litellm_provider": "azure",
    "mode": "audio_transcription",
    "modality": [
      "Voice"
    ],
    "inCost": 2.5,
    "outCost": 10,
    "maxTokens": "16k",
    "maxInputTokens": 16000,
    "maxOutputTokens": 2000,
    "releaseDate": "2025-10-15",
    "desc": "GPT-4o Transcribe Diarize is an automatic speech recognition (ASR) model with built-in speaker diarization, meaning it associates audio segments with different speakers in a conversation. This model is only available in the Transcription API.",
    "health": {
      "total": 2,
      "online": 2
    }
  },
  "whisper-1": {
    "provider": "Azure Foundry",
    "litellm_provider": "azure",
    "mode": "audio_transcription",
    "modality": [
      "Voice"
    ],
    "inCost": 0,
    "outCost": 0,
    "maxTokens": "N/A",
    "maxInputTokens": null,
    "maxOutputTokens": null,
    "releaseDate": "2023-11-06",
    "desc": "whisper-1 is for Speech to text",
    "health": {
      "total": 2,
      "online": 2
    }
  },
  "gpt-realtime": {
    "provider": "Azure Foundry",
    "litellm_provider": "azure",
    "mode": "realtime",
    "modality": [
      "Text",
      "Vision",
      "Voice"
    ],
    "inCost": 4,
    "outCost": 16,
    "maxTokens": "32k",
    "maxInputTokens": 32000,
    "maxOutputTokens": 4096,
    "releaseDate": "2025-08-28",
    "desc": "gpt-realtime, a new multimodal S2S model with improved instruction-following that processes audio, text, and image inputs to generate audio and text outputs.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "gpt-realtime-1.5": {
    "provider": "Azure Foundry",
    "litellm_provider": "azure",
    "mode": "realtime",
    "modality": [
      "Text",
      "Vision",
      "Voice"
    ],
    "inCost": 4,
    "outCost": 16,
    "maxTokens": "32k",
    "maxInputTokens": 32000,
    "maxOutputTokens": 4096,
    "releaseDate": "2026-02-23",
    "desc": "GPT-Reatime-1.5 is our flagship audio model for voice agents & customer support.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "stable-diffusion-3.5-large": {
    "provider": "AWS Bedrock",
    "litellm_provider": "bedrock",
    "mode": "image_generation",
    "modality": [
      "Image"
    ],
    "inCost": 0,
    "outCost": 0,
    "maxTokens": "77",
    "maxInputTokens": 77,
    "maxOutputTokens": null,
    "releaseDate": "2024-10-22",
    "desc": "This new model generates high-quality images from text descriptions in a wide range of styles to accelerate the creation of concept art, visual effects, and detailed product imagery for customers in media, gaming, advertising, and retail.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "stable-image-core-v1": {
    "provider": "AWS Bedrock",
    "litellm_provider": "bedrock",
    "mode": "image_generation",
    "modality": [
      "Image"
    ],
    "inCost": 0,
    "outCost": 0,
    "maxTokens": "77",
    "maxInputTokens": 77,
    "maxOutputTokens": null,
    "releaseDate": "2024-04-15",
    "desc": "Using an enhanced version of SDXL, Stable Image Core delivers exceptional speed and efficiency while maintaining the high-quality output synonymous with Stable Diffusion models—all at half the price of SDXL.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "stable-image-ultra-v1": {
    "provider": "AWS Bedrock",
    "litellm_provider": "bedrock",
    "mode": "image_generation",
    "modality": [
      "Image"
    ],
    "inCost": 0,
    "outCost": 0,
    "maxTokens": "77",
    "maxInputTokens": 77,
    "maxOutputTokens": null,
    "releaseDate": "2025-04-01",
    "desc": "Stable Image Ultra, powered by Stability AI’s most advanced models, including Stable Diffusion 3.5, sets a new standard in image generation.\nIt excels in typography, intricate compositions, dynamic lighting, vibrant colors, and artistic cohesion.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "gemini-3-pro-image": {
    "provider": "Vertex AI",
    "litellm_provider": "vertex_ai",
    "mode": "image_generation",
    "modality": [
      "Image"
    ],
    "inCost": 2,
    "outCost": 12,
    "maxTokens": "65.5k",
    "maxInputTokens": 65536,
    "maxOutputTokens": 32768,
    "releaseDate": "2026-03-01",
    "desc": "Gemini 3 Pro Image, or Gemini 3 Pro (with Nano Banana), is designed to tackle the most challenging image generation by incorporating state-of-the-art reasoning capabilities. It's the best model for complex and multi-turn image generation and editing, having improved accuracy and enhanced image quality.",
    "health": {
      "total": 12,
      "online": 12
    }
  },
  "gemini-3.1-flash-image": {
    "provider": "Vertex AI",
    "litellm_provider": "vertex_ai",
    "mode": "image_generation",
    "modality": [
      "Text",
      "Image"
    ],
    "inCost": 0.5,
    "outCost": 3,
    "maxTokens": "131.1k",
    "maxInputTokens": 131072,
    "maxOutputTokens": 32768,
    "releaseDate": "2026-03-01",
    "desc": "Nano Banana 2 provides high-quality image generation and conversational editing at a mainstream price point and low latency. It serves as the high-efficiency counterpart to Gemini 3 Pro Image, optimized for speed and high-volume developer use cases.",
    "health": {
      "total": 10,
      "online": 10
    }
  },
  "gemini-3.1-flash-lite-image": {
    "provider": "Vertex AI",
    "litellm_provider": "vertex_ai",
    "mode": "image_generation",
    "modality": [
      "Text",
      "Image"
    ],
    "inCost": 0.25,
    "outCost": 1.5,
    "maxTokens": "65.5k",
    "maxInputTokens": 65536,
    "maxOutputTokens": 4096,
    "releaseDate": "2026-03-01",
    "desc": "Nano Banana 2 Lite is Google's fastest image generation model, enabling rapid creation and iteration. Designed as the efficiency specialist of the image generation family, it offers ultra-low latency and cost-effective image generation and editing at half the price of Nano Banana 2.",
    "health": {
      "total": 10,
      "online": 10
    }
  },
  "gpt-image-2": {
    "provider": "Azure Foundry",
    "litellm_provider": "azure",
    "mode": "image_generation",
    "modality": [
      "Text",
      "Image"
    ],
    "inCost": 5,
    "outCost": 10,
    "maxTokens": null,
    "maxInputTokens": null,
    "maxOutputTokens": null,
    "releaseDate": "2026-04-21",
    "desc": "OpenAI's gpt-image-2 is a multimodal image generation and editing model with 4K resolution support. Accepts text prompts and reference images, and excels at complex compositions, typography, and conversational editing.",
    "health": {
      "total": 2,
      "online": 2
    }
  },
  "glm-5.2": {
    "provider": "3rd Party",
    "litellm_provider": "3rd_party",
    "mode": "chat",
    "modality": [
      "Text"
    ],
    "inCost": 0.924,
    "outCost": 2.904,
    "maxTokens": "1M",
    "maxInputTokens": 1000000,
    "maxOutputTokens": 128000,
    "releaseDate": "2025-12-11",
    "desc": "GLM-5.2 is Z.AI's flagship foundation model engineered for long-horizon agentic coding and software engineering tasks.\nFeatures a 1M-token context window and 128K output tokens, delivering top open-source benchmark performance.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "glm-5.3": {
    "provider": "3rd Party",
    "litellm_provider": "3rd_party",
    "mode": "chat",
    "modality": [
      "Text"
    ],
    "inCost": 1.4,
    "outCost": 4.4,
    "maxTokens": "1.05M",
    "maxInputTokens": 1050000,
    "maxOutputTokens": 131100,
    "releaseDate": "2026-02-24",
    "desc": "GLM-5.3 is a large-scale reasoning model from Z.ai, built for complex software engineering and long-horizon agent tasks.\nIt supports text input and output with a 1M-token context window, and improves on GLM-5.2 in coding and in the balance between performance and token efficiency.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "minimax-m3": {
    "provider": "3rd Party",
    "litellm_provider": "3rd_party",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision",
      "Video"
    ],
    "inCost": 0.3,
    "outCost": 1.2,
    "maxTokens": "1.05M",
    "maxInputTokens": 1048576,
    "maxOutputTokens": 512000,
    "releaseDate": "2025-01-01",
    "desc": "MiniMax M3 is a multimodal foundation model supporting text, image, and video inputs with a 1M-token context window.\nDesigned for long-horizon agentic work, coding, and tool use via its proprietary Sparse Attention mechanism.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "muse-spark-1.2": {
    "provider": "3rd Party",
    "litellm_provider": "3rd_party",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision",
      "Video",
      "Audio"
    ],
    "inCost": 1.25,
    "outCost": 4.25,
    "maxTokens": "1.05M",
    "maxInputTokens": 1048576,
    "maxOutputTokens": 1048576,
    "releaseDate": "2026-06-10",
    "desc": "Meta Muse Spark 1.2 is a multimodal reasoning model for complex agentic tasks.\nIt supports text, image, video, audio, and PDF inputs with a 1M-token context window.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "muse-spark-1.1": {
    "provider": "3rd Party",
    "litellm_provider": "3rd_party",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision",
      "Video",
      "Audio"
    ],
    "inCost": 1.25,
    "outCost": 4.25,
    "maxTokens": "1M",
    "maxInputTokens": 1000000,
    "maxOutputTokens": 1000000,
    "releaseDate": "2026-03-05",
    "desc": "Meta Muse Spark 1.1 is a multimodal reasoning model for agentic workflows,\nincluding planning, coding, computer use, and visual-to-code tasks.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "kimi-k3": {
    "provider": "3rd Party",
    "litellm_provider": "3rd_party",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision",
      "Video"
    ],
    "inCost": 3,
    "outCost": 15,
    "maxTokens": "1M",
    "maxInputTokens": 1000000,
    "maxOutputTokens": 1000000,
    "releaseDate": "2026-07-01",
    "desc": "Kimi K3 is Moonshot AI's 2.8T-parameter multimodal reasoning model,\ndesigned for long-context coding, knowledge work, and agent workflows.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "qwen3.8-27b": {
    "provider": "3rd Party",
    "litellm_provider": "3rd_party",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision",
      "Video"
    ],
    "inCost": 0.45,
    "outCost": 3.2,
    "maxTokens": "262.1k",
    "maxInputTokens": 262100,
    "maxOutputTokens": 131072,
    "releaseDate": "2026-07-15",
    "desc": "Qwen3.8 27B is an open-weight dense vision-language model from Qwen.\nIt is suited for coding, professional workflows, research, multimodal interaction, and long-running agent tasks, with flexible thinking that can be enabled or disabled.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "qwen3.8-max": {
    "provider": "3rd Party",
    "litellm_provider": "3rd_party",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision",
      "Video"
    ],
    "inCost": 2,
    "outCost": 6,
    "maxTokens": "1M",
    "maxInputTokens": 1000000,
    "maxOutputTokens": 131072,
    "releaseDate": "2026-07-15",
    "desc": "Qwen3.8 Max is Alibaba's flagship multimodal reasoning model for complex reasoning, visual understanding, coding, and agentic workflows.\nIt provides a 1M-token context window.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "qwen3.7-max": {
    "provider": "3rd Party",
    "litellm_provider": "3rd_party",
    "mode": "chat",
    "modality": [
      "Text"
    ],
    "inCost": 1.475,
    "outCost": 4.425,
    "maxTokens": "1M",
    "maxInputTokens": 1000000,
    "maxOutputTokens": 65536,
    "releaseDate": "2026-05-20",
    "desc": "Qwen3.7 Max is Alibaba's flagship Qwen3.7 model with a 1M-token context window.\nAgent-centric architecture optimized for coding, office productivity, and long-horizon autonomous execution.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "qwen3.7-plus": {
    "provider": "3rd Party",
    "litellm_provider": "3rd_party",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 0.32,
    "outCost": 1.28,
    "maxTokens": "1M",
    "maxInputTokens": 1000000,
    "maxOutputTokens": 65536,
    "releaseDate": "2026-05-20",
    "desc": "Qwen3.7 Plus is Alibaba's cost-effective Qwen3.7 model with a 1M-token context window and vision support.\nStrong at coding, tool use, and productivity workflows with native image understanding.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "nemotron-3-ultra-550b": {
    "provider": "3rd Party",
    "litellm_provider": "3rd_party",
    "mode": "chat",
    "modality": [
      "Text"
    ],
    "inCost": 0.6,
    "outCost": 3.6,
    "maxTokens": "1M",
    "maxInputTokens": 1000000,
    "maxOutputTokens": 65536,
    "releaseDate": "2025-01-01",
    "desc": "NVIDIA Nemotron 3 Ultra is a 550B-parameter hybrid Transformer-Mamba MoE model with 55B active parameters and a 1M-token context window.\nDesigned for extended context handling and complex agentic workflows.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "step-3.7-flash": {
    "provider": "3rd Party",
    "litellm_provider": "3rd_party",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision",
      "Video"
    ],
    "inCost": 0.2,
    "outCost": 1.15,
    "maxTokens": "256k",
    "maxInputTokens": 256000,
    "maxOutputTokens": 256000,
    "releaseDate": "2025-01-01",
    "desc": "Step 3.7 Flash is StepFun's high-efficiency multimodal MoE model with native image and video understanding and a 256K context window.\nFeatures selectable reasoning levels (high/medium/low) for flexible cost-performance tradeoffs.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "ring-2.6-1t": {
    "provider": "3rd Party",
    "litellm_provider": "3rd_party",
    "mode": "chat",
    "modality": [
      "Text"
    ],
    "inCost": 0.075,
    "outCost": 0.625,
    "maxTokens": "262.1k",
    "maxInputTokens": 262144,
    "maxOutputTokens": 65536,
    "releaseDate": "2025-01-01",
    "desc": "Ring 2.6 1T is InclusionAI's 1T-parameter-scale thinking model with 63B active parameters and a 262K-token context window.\nOptimized for agentic workflows with competitive performance at very low cost.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "mistral-medium-3.5": {
    "provider": "3rd Party",
    "litellm_provider": "3rd_party",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 1.5,
    "outCost": 7.5,
    "maxTokens": "262.1k",
    "maxInputTokens": 262144,
    "maxOutputTokens": 65536,
    "releaseDate": "2025-01-01",
    "desc": "Mistral Medium 3.5 is a 128B dense frontier-class multimodal model optimized for agentic and coding use cases.\nSupports text and image inputs with a 256K context window and strong multi-tool calling capabilities.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "deepseek-v4-flash-0731": {
    "provider": "3rd Party",
    "litellm_provider": "3rd_party",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 0.112,
    "outCost": 0.224,
    "maxTokens": "1.05M",
    "maxInputTokens": 1048576,
    "maxOutputTokens": 1048576,
    "releaseDate": "2026-07-31",
    "desc": "DeepSeek-V4-Flash - The official release of DeepSeek-V4-Flash, superseding the preview version, with substantially enhanced agentic capabilities. A sparse MoE model with 284B total parameters and 13B active per token, optimized for code-agent tasks, reasoning, and tool use.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "deepseek-v4-pro-0813": {
    "provider": "3rd Party",
    "litellm_provider": "3rd_party",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 1.218,
    "outCost": 2.436,
    "maxTokens": "1.05M",
    "maxInputTokens": 1048576,
    "maxOutputTokens": 1048576,
    "releaseDate": "2026-08-13",
    "desc": "DeepSeek-V4-Pro is a 1.6T-parameter Mixture-of-Experts model (49B activated) with a 1M token context window.\nFeatures three reasoning modes (Non-Think, Think High, Think Max), optimized for coding, mathematics, and agentic tool-use tasks.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "rone-auto": {
    "provider": "3rd Party",
    "litellm_provider": "3rd_party",
    "mode": "chat",
    "modality": [
      "Text"
    ],
    "inCost": null,
    "outCost": null,
    "maxTokens": null,
    "maxInputTokens": null,
    "maxOutputTokens": null,
    "releaseDate": "2026-01-01",
    "desc": "Auto-routing model. Each request is assessed for prompt complexity and task type,\nthen forwarded to the most suitable model in the allowed pool, balancing capability\nand cost. The response reports which model was selected.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "claude-fable-5": {
    "provider": "AWS Bedrock",
    "litellm_provider": "bedrock",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 10,
    "outCost": 50,
    "maxTokens": "1M",
    "maxInputTokens": 1000000,
    "maxOutputTokens": 128000,
    "releaseDate": "2026-06-01",
    "desc": "Claude Fable 5 is Anthropic's most capable widely released model, for the most demanding reasoning and long-horizon agentic work. Features a 1M token context window and supports outputs up to 128k tokens.",
    "health": {
      "total": 3,
      "online": 3
    }
  },
  "claude-opus-5": {
    "provider": "AWS Bedrock",
    "litellm_provider": "bedrock",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 5,
    "outCost": 25,
    "maxTokens": "1M",
    "maxInputTokens": 1000000,
    "maxOutputTokens": 128000,
    "releaseDate": "2026-06-01",
    "desc": "Claude Opus 5 is Anthropic's most advanced Opus model, powering long-running agents while delivering improvements in coding and professional work. Features a 1M token context window and supports outputs up to 128k tokens.",
    "health": {
      "total": 3,
      "online": 3
    }
  },
  "claude-opus-4-8": {
    "provider": "AWS Bedrock",
    "litellm_provider": "bedrock",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 5,
    "outCost": 25,
    "maxTokens": "1M",
    "maxInputTokens": 1000000,
    "maxOutputTokens": 128000,
    "releaseDate": "2026-04-15",
    "desc": "Claude Opus 4.8 is Anthropic's most capable model for complex reasoning and agentic coding. Optimized for coding, agents, and deeper reasoning in enterprise workflows. Features a 1M token context window and supports outputs up to 128k tokens.",
    "health": {
      "total": 3,
      "online": 3
    }
  },
  "claude-opus-4-7": {
    "provider": "AWS Bedrock",
    "litellm_provider": "bedrock",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 5,
    "outCost": 25,
    "maxTokens": "1M",
    "maxInputTokens": 1000000,
    "maxOutputTokens": 128000,
    "releaseDate": "2026-03-10",
    "desc": "Claude Opus 4.7 is Anthropic's most capable generally available model, advancing performance across coding, enterprise workflows, and long-running agentic tasks. Features a 1M token context window and supports outputs up to 128k tokens.",
    "health": {
      "total": 3,
      "online": 3
    }
  },
  "claude-opus-4-6": {
    "provider": "Vertex AI",
    "litellm_provider": "vertex_ai",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 5,
    "outCost": 25,
    "maxTokens": "200k",
    "maxInputTokens": 200000,
    "maxOutputTokens": 128000,
    "releaseDate": "2026-02-05",
    "desc": "Claude Opus 4.6 is the next generation of our most intelligent model, and the world’s best model for coding, enterprise agents, and professional work. Opus 4.6 features a 1M token context window in beta. Opus 4.6 supports outputs of up to 128k tokens, which lets Claude complete larger-output tasks without breaking them into multiple requests.",
    "health": {
      "total": 5,
      "online": 5
    }
  },
  "claude-sonnet-4-5": {
    "provider": "Vertex AI",
    "litellm_provider": "vertex_ai",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 3,
    "outCost": 15,
    "maxTokens": "200k",
    "maxInputTokens": 200000,
    "maxOutputTokens": 64000,
    "releaseDate": "2025-09-29",
    "desc": "Anthropic's mid-size model with the highest intelligence across most tasks with exceptional agent and coding capabilities.",
    "health": {
      "total": 5,
      "online": 5
    }
  },
  "claude-haiku-4-5": {
    "provider": "Vertex AI",
    "litellm_provider": "vertex_ai",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 1,
    "outCost": 5,
    "maxTokens": "200k",
    "maxInputTokens": 200000,
    "maxOutputTokens": 64000,
    "releaseDate": "2025-10-01",
    "desc": "Claude Haiku 4.5 delivers near-frontier performance for a wide range of use cases, and stands out as one of the best coding models in the world–with the right speed and cost to power free products and high-volume user experiences.",
    "health": {
      "total": 2,
      "online": 2
    }
  },
  "claude-sonnet-4-6": {
    "provider": "Vertex AI",
    "litellm_provider": "vertex_ai",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 3,
    "outCost": 15,
    "maxTokens": "200k",
    "maxInputTokens": 200000,
    "maxOutputTokens": 128000,
    "releaseDate": "2026-02-05",
    "desc": "Claude Sonnet 4.6 delivers frontier intelligence at scale—built for coding, agents, and enterprise workflows.",
    "health": {
      "total": 5,
      "online": 5
    }
  },
  "claude-sonnet-5": {
    "provider": "AWS Bedrock",
    "litellm_provider": "bedrock",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 2,
    "outCost": 10,
    "maxTokens": "1M",
    "maxInputTokens": 1000000,
    "maxOutputTokens": 128000,
    "releaseDate": "2026-06-01",
    "desc": "Claude Sonnet 5 is the best combination of speed and intelligence, with a 1M token context window and adaptive thinking for complex reasoning tasks.",
    "health": {
      "total": 3,
      "online": 3
    }
  },
  "gemini-3-pro": {
    "provider": "Vertex AI",
    "litellm_provider": "vertex_ai",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 2,
    "outCost": 12,
    "maxTokens": "1.05M",
    "maxInputTokens": 1048576,
    "maxOutputTokens": 65536,
    "releaseDate": "2026-01-15",
    "desc": "Gemini 3.1 Pro provides better thinking, improved token efficiency, and a more grounded, factually consistent experience. It's optimized for software engineering behavior and usability, as well as agentic workflows requiring precise tool usage and reliable multi-step execution across real-world domains",
    "health": {
      "total": 5,
      "online": 5
    }
  },
  "rone-free": {
    "provider": "TrendMicro",
    "litellm_provider": "trendmicro",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 0,
    "outCost": 0,
    "maxTokens": "262.1k",
    "maxInputTokens": 262144,
    "maxOutputTokens": 262144,
    "releaseDate": "2026-01-01",
    "desc": "Qwen3.6-35B-A3B (TrendMicro) - 35B-parameter (3B active) multimodal MoE model with hybrid Gated DeltaNet + sparse attention architecture. Supports 262K context (extensible to 1M via YaRN), vision (images/video), thinking/non-thinking modes, function calling, and structured output.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "rone-general": {
    "provider": "TrendMicro",
    "litellm_provider": "trendmicro",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 0,
    "outCost": 0,
    "maxTokens": "262.1k",
    "maxInputTokens": 262144,
    "maxOutputTokens": 262144,
    "releaseDate": "2026-01-01",
    "desc": "Qwen3.6-35B-A3B (TrendMicro) - 35B-parameter (3B active) multimodal MoE model with hybrid Gated DeltaNet + sparse attention architecture. Supports 262K context (extensible to 1M via YaRN), vision (images/video), thinking/non-thinking modes, function calling, and structured output.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "qwen3-30b-a3b-instruct-2507-gmi": {
    "provider": "TrendMicro",
    "litellm_provider": "trendmicro",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 0,
    "outCost": 0,
    "maxTokens": "262.1k",
    "maxInputTokens": 262144,
    "maxOutputTokens": 262144,
    "releaseDate": "2025-07-01",
    "desc": "Qwen3.6-35B-A3B (TrendMicro) - 35B-parameter (3B active) multimodal MoE model with hybrid Gated DeltaNet + sparse attention architecture. Supports 262K context (extensible to 1M via YaRN), vision (images/video), thinking/non-thinking modes, function calling, and structured output.",
    "health": {
      "total": 1,
      "online": 1
    }
  },
  "qwen3.5-35b-a3b-gmi-ray": {
    "provider": "TrendMicro",
    "litellm_provider": "trendmicro",
    "mode": "chat",
    "modality": [
      "Text",
      "Vision"
    ],
    "inCost": 0,
    "outCost": 0,
    "maxTokens": "262.1k",
    "maxInputTokens": 262144,
    "maxOutputTokens": 262144,
    "releaseDate": "2026-01-10",
    "desc": "Qwen3.6-35B-A3B (TrendMicro) - 35B-parameter (3B active) multimodal MoE model with hybrid Gated DeltaNet + sparse attention architecture. Supports 262K context (extensible to 1M via YaRN), vision (images/video), thinking/non-thinking modes, function calling, and structured output.",
    "health": {
      "total": 1,
      "online": 1
    }
  }
};

// ── Application State ───────────────────────────────────────────────────────
const DEFAULT_BASE_URL = "https://api.rdsec.trendmicro.com/prod/aiendpoint/v1";

const VENDOR_RULES = [
  {
    key: "trendmicro",
    label: "TrendMicro",
    color: "#ef4444",
    bg: "rgba(239, 68, 68, 0.12)",
    letter: "T",
    iconSvg: "<svg fill=\"#e11d48\" role=\"img\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><title>Trend Micro</title><path d=\"M12 0C5.38 0 0 5.37 0 12C0 14.45 .734 16.72 2 18.62C1.5 17.45 1.58 15.94 2.19 14.29L2.2 14.25L2.25 14.12L2.3 14L2.32 13.95C2.54 13.4 2.82 12.83 3.16 12.26C3.21 12.16 3.25 12.07 3.3 12L1.86 12L2.21 11.21C3.4 10.88 5.38 10.22 7.27 8.39L7.32 8.39H8.32L7.03 11.14L9.1 11.14L8.72 11.96L6.66 11.96S5.69 13.9 5.36 15.28C5.11 16.82 5.36 18 6.74 18.41C7.59 18.67 8.66 18.61 9.81 18.29C12.5 17.45 15.34 15.62 17.43 13.18C20.87 9.19 20.94 5.1 17.58 4.05C15.43 3.38 12.39 4.13 9.58 5.8C13.08 3.54 16.94 2.5 19.59 3.31C20.09 3.46 20.53 3.68 20.89 3.94A11.97 11.97 0 0 0 12 0M22.17 5.63C23 7.81 21.97 11.07 19.2 14.29C15.04 19.13 8.47 22.05 4.5 20.83A4.46 4.46 0 0 1 3.24 20.21A11.96 11.96 0 0 0 12 24C18.63 24 24 18.63 24 12C24 9.66 23.33 7.5 22.17 5.63Z\"/></svg>",
    test: (id, m) => {
      const p = (m?.provider || "").toLowerCase();
      const lp = (m?.litellm_provider || "").toLowerCase();
      const desc = (m?.desc || "").toLowerCase();
      return id === "mock-llm" || p === "trendmicro" || lp === "trendmicro" || /(-gmi|-gmi-ray|-ray)$/i.test(id) || /^(rone-|primus-|cybertron-)/i.test(id) || desc.includes("(trendmicro)");
    }
  },
  {
    key: "openai",
    label: "OpenAI",
    color: "#10a37f",
    bg: "rgba(255, 255, 255, 0.08)",
    letter: "O",
    iconSvg: "<svg fill=\"#ffffff\" role=\"img\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><title>OpenAI</title><path d=\"M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z\"/></svg>",
    test: (id) => id !== "mock-llm" && /^(gpt-|o1|o3|o4|o5|text-embedding|tts-|whisper-|dall-e|gpt-image|gpt-realtime|gpt-audio)/i.test(id)
  },
  {
    key: "anthropic",
    label: "Anthropic (Claude)",
    color: "#f59e0b",
    bg: "rgba(245, 158, 11, 0.12)",
    letter: "A",
    iconSvg: "<svg height=\"1em\" style=\"flex:none;line-height:1\" viewBox=\"0 0 24 24\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\"><title>Claude</title><path d=\"M4.709 15.955l4.72-2.647.08-.23-.08-.128H9.2l-.79-.048-2.698-.073-2.339-.097-2.266-.122-.571-.121L0 11.784l.055-.352.48-.321.686.06 1.52.103 2.278.158 1.652.097 2.449.255h.389l.055-.157-.134-.098-.103-.097-2.358-1.596-2.552-1.688-1.336-.972-.724-.491-.364-.462-.158-1.008.656-.722.881.06.225.061.893.686 1.908 1.476 2.491 1.833.365.304.145-.103.019-.073-.164-.274-1.355-2.446-1.446-2.49-.644-1.032-.17-.619a2.97 2.97 0 01-.104-.729L6.283.134 6.696 0l.996.134.42.364.62 1.414 1.002 2.229 1.555 3.03.456.898.243.832.091.255h.158V9.01l.128-1.706.237-2.095.23-2.695.08-.76.376-.91.747-.492.584.28.48.685-.067.444-.286 1.851-.559 2.903-.364 1.942h.212l.243-.242.985-1.306 1.652-2.064.73-.82.85-.904.547-.431h1.033l.76 1.129-.34 1.166-1.064 1.347-.881 1.142-1.264 1.7-.79 1.36.073.11.188-.02 2.856-.606 1.543-.28 1.841-.315.833.388.091.395-.328.807-1.969.486-2.309.462-3.439.813-.042.03.049.061 1.549.146.662.036h1.622l3.02.225.79.522.474.638-.079.485-1.215.62-1.64-.389-3.829-.91-1.312-.329h-.182v.11l1.093 1.068 2.006 1.81 2.509 2.33.127.578-.322.455-.34-.049-2.205-1.657-.851-.747-1.926-1.62h-.128v.17l.444.649 2.345 3.521.122 1.08-.17.353-.608.213-.668-.122-1.374-1.925-1.415-2.167-1.143-1.943-.14.08-.674 7.254-.316.37-.729.28-.607-.461-.322-.747.322-1.476.389-1.924.315-1.53.286-1.9.17-.632-.012-.042-.14.018-1.434 1.967-2.18 2.945-1.726 1.845-.414.164-.717-.37.067-.662.401-.589 2.388-3.036 1.44-1.882.93-1.086-.006-.158h-.055L4.132 18.56l-1.13.146-.487-.456.061-.746.231-.243 1.908-1.312-.006.006z\" fill=\"#D97757\" fill-rule=\"nonzero\"></path></svg>",
    test: (id) => /^claude-/i.test(id)
  },
  {
    key: "google",
    label: "Google",
    color: "#3b82f6",
    bg: "rgba(59, 130, 246, 0.12)",
    letter: "G",
    iconSvg: "<svg height=\"1em\" style=\"flex:none;line-height:1\" viewBox=\"0 0 24 24\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\"><title>Google</title><path d=\"M23 12.245c0-.905-.075-1.565-.236-2.25h-10.54v4.083h6.186c-.124 1.014-.797 2.542-2.294 3.569l-.021.136 3.332 2.53.23.022C21.779 18.417 23 15.593 23 12.245z\" fill=\"#4285F4\"></path><path d=\"M12.225 23c3.03 0 5.574-.978 7.433-2.665l-3.542-2.688c-.948.648-2.22 1.1-3.891 1.1a6.745 6.745 0 01-6.386-4.572l-.132.011-3.465 2.628-.045.124C4.043 20.531 7.835 23 12.225 23z\" fill=\"#34A853\"></path><path d=\"M5.84 14.175A6.65 6.65 0 015.463 12c0-.758.138-1.491.361-2.175l-.006-.147-3.508-2.67-.115.054A10.831 10.831 0 001 12c0 1.772.436 3.447 1.197 4.938l3.642-2.763z\" fill=\"#FBBC05\"></path><path d=\"M12.225 5.253c2.108 0 3.529.892 4.34 1.638l3.167-3.031C17.787 2.088 15.255 1 12.225 1 7.834 1 4.043 3.469 2.197 7.062l3.63 2.763a6.77 6.77 0 016.398-4.572z\" fill=\"#EB4335\"></path></svg>",
    test: (id) => /^(gemini-|gemma-|palm-|bison|gecko)/i.test(id)
  },
  {
    key: "meta",
    label: "Meta",
    color: "#0668e1",
    bg: "rgba(6, 104, 225, 0.12)",
    letter: "M",
    iconSvg: "<svg height=\"1em\" style=\"flex:none;line-height:1\" viewBox=\"0 0 24 24\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\"><title>Meta</title><path d=\"M6.897 4h-.024l-.031 2.615h.022c1.715 0 3.046 1.357 5.94 6.246l.175.297.012.02 1.62-2.438-.012-.019a48.763 48.763 0 00-1.098-1.716 28.01 28.01 0 00-1.175-1.629C10.413 4.932 8.812 4 6.896 4z\" fill=\"url(#lobe-icons-meta-0-_R_0_)\"></path><path d=\"M6.873 4C4.95 4.01 3.247 5.258 2.02 7.17a4.352 4.352 0 00-.01.017l2.254 1.231.011-.017c.718-1.083 1.61-1.774 2.568-1.785h.021L6.896 4h-.023z\" fill=\"url(#lobe-icons-meta-1-_R_0_)\"></path><path d=\"M2.019 7.17l-.011.017C1.2 8.447.598 9.995.274 11.664l-.005.022 2.534.6.004-.022c.27-1.467.786-2.828 1.456-3.845l.011-.017L2.02 7.17z\" fill=\"url(#lobe-icons-meta-2-_R_0_)\"></path><path d=\"M2.807 12.264l-2.533-.6-.005.022c-.177.918-.267 1.851-.269 2.786v.023l2.598.233v-.023a12.591 12.591 0 01.21-2.44z\" fill=\"url(#lobe-icons-meta-3-_R_0_)\"></path><path d=\"M2.677 15.537a5.462 5.462 0 01-.079-.813v-.022L0 14.468v.024a8.89 8.89 0 00.146 1.652l2.535-.585a4.106 4.106 0 01-.004-.022z\" fill=\"url(#lobe-icons-meta-4-_R_0_)\"></path><path d=\"M3.27 16.89c-.284-.31-.484-.756-.589-1.328l-.004-.021-2.535.585.004.021c.192 1.01.568 1.85 1.106 2.487l.014.017 2.018-1.745a2.106 2.106 0 01-.015-.016z\" fill=\"url(#lobe-icons-meta-5-_R_0_)\"></path><path d=\"M10.78 9.654c-1.528 2.35-2.454 3.825-2.454 3.825-2.035 3.2-2.739 3.917-3.871 3.917a1.545 1.545 0 01-1.186-.508l-2.017 1.744.014.017C2.01 19.518 3.058 20 4.356 20c1.963 0 3.374-.928 5.884-5.33l1.766-3.13a41.283 41.283 0 00-1.227-1.886z\" fill=\"#0082FB\"></path><path d=\"M13.502 5.946l-.016.016c-.4.43-.786.908-1.16 1.416.378.483.768 1.024 1.175 1.63.48-.743.928-1.345 1.367-1.807l.016-.016-1.382-1.24z\" fill=\"url(#lobe-icons-meta-6-_R_0_)\"></path><path d=\"M20.918 5.713C19.853 4.633 18.583 4 17.225 4c-1.432 0-2.637.787-3.723 1.944l-.016.016 1.382 1.24.016-.017c.715-.747 1.408-1.12 2.176-1.12.826 0 1.6.39 2.27 1.075l.015.016 1.589-1.425-.016-.016z\" fill=\"#0082FB\"></path><path d=\"M23.998 14.125c-.06-3.467-1.27-6.566-3.064-8.396l-.016-.016-1.588 1.424.015.016c1.35 1.392 2.277 3.98 2.361 6.971v.023h2.292v-.022z\" fill=\"url(#lobe-icons-meta-7-_R_0_)\"></path><path d=\"M23.998 14.15v-.023h-2.292v.022c.004.14.006.282.006.424 0 .815-.121 1.474-.368 1.95l-.011.022 1.708 1.782.013-.02c.62-.96.946-2.293.946-3.91 0-.083 0-.165-.002-.247z\" fill=\"url(#lobe-icons-meta-8-_R_0_)\"></path><path d=\"M21.344 16.52l-.011.02c-.214.402-.519.67-.917.787l.778 2.462a3.493 3.493 0 00.438-.182 3.558 3.558 0 001.366-1.218l.044-.065.012-.02-1.71-1.784z\" fill=\"url(#lobe-icons-meta-9-_R_0_)\"></path><path d=\"M19.92 17.393c-.262 0-.492-.039-.718-.14l-.798 2.522c.449.153.927.222 1.46.222.492 0 .943-.073 1.352-.215l-.78-2.462c-.167.05-.341.075-.517.073z\" fill=\"url(#lobe-icons-meta-10-_R_0_)\"></path><path d=\"M18.323 16.534l-.014-.017-1.836 1.914.016.017c.637.682 1.246 1.105 1.937 1.337l.797-2.52c-.291-.125-.573-.353-.9-.731z\" fill=\"url(#lobe-icons-meta-11-_R_0_)\"></path><path d=\"M18.309 16.515c-.55-.642-1.232-1.712-2.303-3.44l-1.396-2.336-.011-.02-1.62 2.438.012.02.989 1.668c.959 1.61 1.74 2.774 2.493 3.585l.016.016 1.834-1.914a2.353 2.353 0 01-.014-.017z\" fill=\"url(#lobe-icons-meta-12-_R_0_)\"></path><defs><linearGradient id=\"lobe-icons-meta-0-_R_0_\" x1=\"75.897%\" x2=\"26.312%\" y1=\"89.199%\" y2=\"12.194%\"><stop offset=\".06%\" stop-color=\"#0867DF\"></stop><stop offset=\"45.39%\" stop-color=\"#0668E1\"></stop><stop offset=\"85.91%\" stop-color=\"#0064E0\"></stop></linearGradient><linearGradient id=\"lobe-icons-meta-1-_R_0_\" x1=\"21.67%\" x2=\"97.068%\" y1=\"75.874%\" y2=\"23.985%\"><stop offset=\"13.23%\" stop-color=\"#0064DF\"></stop><stop offset=\"99.88%\" stop-color=\"#0064E0\"></stop></linearGradient><linearGradient id=\"lobe-icons-meta-2-_R_0_\" x1=\"38.263%\" x2=\"60.895%\" y1=\"89.127%\" y2=\"16.131%\"><stop offset=\"1.47%\" stop-color=\"#0072EC\"></stop><stop offset=\"68.81%\" stop-color=\"#0064DF\"></stop></linearGradient><linearGradient id=\"lobe-icons-meta-3-_R_0_\" x1=\"47.032%\" x2=\"52.15%\" y1=\"90.19%\" y2=\"15.745%\"><stop offset=\"7.31%\" stop-color=\"#007CF6\"></stop><stop offset=\"99.43%\" stop-color=\"#0072EC\"></stop></linearGradient><linearGradient id=\"lobe-icons-meta-4-_R_0_\" x1=\"52.155%\" x2=\"47.591%\" y1=\"58.301%\" y2=\"37.004%\"><stop offset=\"7.31%\" stop-color=\"#007FF9\"></stop><stop offset=\"100%\" stop-color=\"#007CF6\"></stop></linearGradient><linearGradient id=\"lobe-icons-meta-5-_R_0_\" x1=\"37.689%\" x2=\"61.961%\" y1=\"12.502%\" y2=\"63.624%\"><stop offset=\"7.31%\" stop-color=\"#007FF9\"></stop><stop offset=\"100%\" stop-color=\"#0082FB\"></stop></linearGradient><linearGradient id=\"lobe-icons-meta-6-_R_0_\" x1=\"34.808%\" x2=\"62.313%\" y1=\"68.859%\" y2=\"23.174%\"><stop offset=\"27.99%\" stop-color=\"#007FF8\"></stop><stop offset=\"91.41%\" stop-color=\"#0082FB\"></stop></linearGradient><linearGradient id=\"lobe-icons-meta-7-_R_0_\" x1=\"43.762%\" x2=\"57.602%\" y1=\"6.235%\" y2=\"98.514%\"><stop offset=\"0%\" stop-color=\"#0082FB\"></stop><stop offset=\"99.95%\" stop-color=\"#0081FA\"></stop></linearGradient><linearGradient id=\"lobe-icons-meta-8-_R_0_\" x1=\"60.055%\" x2=\"39.88%\" y1=\"4.661%\" y2=\"69.077%\"><stop offset=\"6.19%\" stop-color=\"#0081FA\"></stop><stop offset=\"100%\" stop-color=\"#0080F9\"></stop></linearGradient><linearGradient id=\"lobe-icons-meta-9-_R_0_\" x1=\"30.282%\" x2=\"61.081%\" y1=\"59.32%\" y2=\"33.244%\"><stop offset=\"0%\" stop-color=\"#027AF3\"></stop><stop offset=\"100%\" stop-color=\"#0080F9\"></stop></linearGradient><linearGradient id=\"lobe-icons-meta-10-_R_0_\" x1=\"20.433%\" x2=\"82.112%\" y1=\"50.001%\" y2=\"50.001%\"><stop offset=\"0%\" stop-color=\"#0377EF\"></stop><stop offset=\"99.94%\" stop-color=\"#0279F1\"></stop></linearGradient><linearGradient id=\"lobe-icons-meta-11-_R_0_\" x1=\"40.303%\" x2=\"72.394%\" y1=\"35.298%\" y2=\"57.811%\"><stop offset=\".19%\" stop-color=\"#0471E9\"></stop><stop offset=\"100%\" stop-color=\"#0377EF\"></stop></linearGradient><linearGradient id=\"lobe-icons-meta-12-_R_0_\" x1=\"32.254%\" x2=\"68.003%\" y1=\"19.719%\" y2=\"84.908%\"><stop offset=\"27.65%\" stop-color=\"#0867DF\"></stop><stop offset=\"100%\" stop-color=\"#0471E9\"></stop></linearGradient></defs></svg>",
    test: (id) => /^(llama|codellama|muse-spark|meta-)/i.test(id)
  },
  {
    key: "deepseek",
    label: "DeepSeek",
    color: "#4d6bfe",
    bg: "rgba(77, 107, 254, 0.12)",
    letter: "D",
    iconSvg: "<svg height=\"1em\" style=\"flex:none;line-height:1\" viewBox=\"0 0 24 24\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\"><title>DeepSeek</title><path d=\"M23.748 4.482c-.254-.124-.364.113-.512.234-.051.039-.094.09-.137.136-.372.397-.806.657-1.373.626-.829-.046-1.537.214-2.163.848-.133-.782-.575-1.248-1.247-1.548-.352-.156-.708-.311-.955-.65-.172-.241-.219-.51-.305-.774-.055-.16-.11-.323-.293-.35-.2-.031-.278.136-.356.276-.313.572-.434 1.202-.422 1.84.027 1.436.633 2.58 1.838 3.393.137.093.172.187.129.323-.082.28-.18.552-.266.833-.055.179-.137.217-.329.14a5.526 5.526 0 01-1.736-1.18c-.857-.828-1.631-1.742-2.597-2.458a11.365 11.365 0 00-.689-.471c-.985-.957.13-1.743.388-1.836.27-.098.093-.432-.779-.428-.872.004-1.67.295-2.687.684a3.055 3.055 0 01-.465.137 9.597 9.597 0 00-2.883-.102c-1.885.21-3.39 1.102-4.497 2.623C.082 8.606-.231 10.684.152 12.85c.403 2.284 1.569 4.175 3.36 5.653 1.858 1.533 3.997 2.284 6.438 2.14 1.482-.085 3.133-.284 4.994-1.86.47.234.962.327 1.78.397.63.059 1.236-.03 1.705-.128.735-.156.684-.837.419-.961-2.155-1.004-1.682-.595-2.113-.926 1.096-1.296 2.746-2.642 3.392-7.003.05-.347.007-.565 0-.845-.004-.17.035-.237.23-.256a4.173 4.173 0 001.545-.475c1.396-.763 1.96-2.015 2.093-3.517.02-.23-.004-.467-.247-.588zM11.581 18c-2.089-1.642-3.102-2.183-3.52-2.16-.392.024-.321.471-.235.763.09.288.207.486.371.739.114.167.192.416-.113.603-.673.416-1.842-.14-1.897-.167-1.361-.802-2.5-1.86-3.301-3.307-.774-1.393-1.224-2.887-1.298-4.482-.02-.386.093-.522.477-.592a4.696 4.696 0 011.529-.039c2.132.312 3.946 1.265 5.468 2.774.868.86 1.525 1.887 2.202 2.891.72 1.066 1.494 2.082 2.48 2.914.348.292.625.514.891.677-.802.09-2.14.11-3.054-.614zm1-6.44a.306.306 0 01.415-.287.302.302 0 01.2.288.306.306 0 01-.31.307.303.303 0 01-.304-.308zm3.11 1.596c-.2.081-.399.151-.59.16a1.245 1.245 0 01-.798-.254c-.274-.23-.47-.358-.552-.758a1.73 1.73 0 01.016-.588c.07-.327-.008-.537-.239-.727-.187-.156-.426-.199-.688-.199a.559.559 0 01-.254-.078c-.11-.054-.2-.19-.114-.358.028-.054.16-.186.192-.21.356-.202.767-.136 1.146.016.352.144.618.408 1.001.782.391.451.462.576.685.914.176.265.336.537.445.848.067.195-.019.354-.25.452z\" fill=\"#4D6BFE\"></path></svg>",
    test: (id) => /^deepseek-/i.test(id)
  },
  {
    key: "mistral",
    label: "Mistral",
    color: "#ff7000",
    bg: "rgba(255, 112, 0, 0.12)",
    letter: "Mi",
    iconSvg: "<svg height=\"1em\" style=\"flex:none;line-height:1\" viewBox=\"0 0 24 24\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\"><title>Mistral</title><path d=\"M3.428 3.4h3.429v3.428H3.428V3.4zm13.714 0h3.43v3.428h-3.43V3.4z\" fill=\"gold\"></path><path d=\"M3.428 6.828h6.857v3.429H3.429V6.828zm10.286 0h6.857v3.429h-6.857V6.828z\" fill=\"#FFAF00\"></path><path d=\"M3.428 10.258h17.144v3.428H3.428v-3.428z\" fill=\"#FF8205\"></path><path d=\"M3.428 13.686h3.429v3.428H3.428v-3.428zm6.858 0h3.429v3.428h-3.429v-3.428zm6.856 0h3.43v3.428h-3.43v-3.428z\" fill=\"#FA500F\"></path><path d=\"M0 17.114h10.286v3.429H0v-3.429zm13.714 0H24v3.429H13.714v-3.429z\" fill=\"#E10500\"></path></svg>",
    test: (id) => /^(mistral-|mixtral-|codestral)/i.test(id)
  },
  {
    key: "qwen",
    label: "Qwen / Alibaba",
    color: "#6366f1",
    bg: "rgba(99, 102, 241, 0.12)",
    letter: "Q",
    iconSvg: "<svg height=\"1em\" style=\"flex:none;line-height:1\" viewBox=\"0 0 24 24\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\"><title>Qwen</title><path d=\"M12.604 1.34c.393.69.784 1.382 1.174 2.075a.18.18 0 00.157.091h5.552c.174 0 .322.11.446.327l1.454 2.57c.19.337.24.478.024.837-.26.43-.513.864-.76 1.3l-.367.658c-.106.196-.223.28-.04.512l2.652 4.637c.172.301.111.494-.043.77-.437.785-.882 1.564-1.335 2.34-.159.272-.352.375-.68.37-.777-.016-1.552-.01-2.327.016a.099.099 0 00-.081.05 575.097 575.097 0 01-2.705 4.74c-.169.293-.38.363-.725.364-.997.003-2.002.004-3.017.002a.537.537 0 01-.465-.271l-1.335-2.323a.09.09 0 00-.083-.049H4.982c-.285.03-.553-.001-.805-.092l-1.603-2.77a.543.543 0 01-.002-.54l1.207-2.12a.198.198 0 000-.197 550.951 550.951 0 01-1.875-3.272l-.79-1.395c-.16-.31-.173-.496.095-.965.465-.813.927-1.625 1.387-2.436.132-.234.304-.334.584-.335a338.3 338.3 0 012.589-.001.124.124 0 00.107-.063l2.806-4.895a.488.488 0 01.422-.246c.524-.001 1.053 0 1.583-.006L11.704 1c.341-.003.724.032.9.34zm-3.432.403a.06.06 0 00-.052.03L6.254 6.788a.157.157 0 01-.135.078H3.253c-.056 0-.07.025-.041.074l5.81 10.156c.025.042.013.062-.034.063l-2.795.015a.218.218 0 00-.2.116l-1.32 2.31c-.044.078-.021.118.068.118l5.716.008c.046 0 .08.02.104.061l1.403 2.454c.046.081.092.082.139 0l5.006-8.76.783-1.382a.055.055 0 01.096 0l1.424 2.53a.122.122 0 00.107.062l2.763-.02a.04.04 0 00.035-.02.041.041 0 000-.04l-2.9-5.086a.108.108 0 010-.113l.293-.507 1.12-1.977c.024-.041.012-.062-.035-.062H9.2c-.059 0-.073-.026-.043-.077l1.434-2.505a.107.107 0 000-.114L9.225 1.774a.06.06 0 00-.053-.031zm6.29 8.02c.046 0 .058.02.034.06l-.832 1.465-2.613 4.585a.056.056 0 01-.05.029.058.058 0 01-.05-.029L8.498 9.841c-.02-.034-.01-.052.028-.054l.216-.012 6.722-.012z\" fill=\"url(#lobe-icons-qwen-_R_0_)\" fill-rule=\"nonzero\"></path><defs><linearGradient id=\"lobe-icons-qwen-_R_0_\" x1=\"0%\" x2=\"100%\" y1=\"0%\" y2=\"0%\"><stop offset=\"0%\" stop-color=\"#6336E7\" stop-opacity=\".84\"></stop><stop offset=\"100%\" stop-color=\"#6F69F7\" stop-opacity=\".84\"></stop></linearGradient></defs></svg>",
    test: (id) => /^qwen/i.test(id)
  },
  {
    key: "xai",
    label: "xAI (Grok)",
    color: "#e2e8f0",
    bg: "rgba(255, 255, 255, 0.08)",
    letter: "X",
    iconSvg: "<svg fill=\"#ffffff\" role=\"img\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><title>X</title><path d=\"M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z\"/></svg>",
    test: (id) => /^grok-/i.test(id)
  },
  {
    key: "nvidia",
    label: "NVIDIA",
    color: "#76b900",
    bg: "rgba(118, 185, 0, 0.12)",
    letter: "N",
    iconSvg: "<svg height=\"1em\" style=\"flex:none;line-height:1\" viewBox=\"0 0 24 24\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\"><title>Nvidia</title><path d=\"M10.212 8.976V7.62c.127-.01.256-.017.388-.021 3.596-.117 5.957 3.184 5.957 3.184s-2.548 3.647-5.282 3.647a3.227 3.227 0 01-1.063-.175v-4.109c1.4.174 1.681.812 2.523 2.258l1.873-1.627a4.905 4.905 0 00-3.67-1.846 6.594 6.594 0 00-.729.044m0-4.476v2.025c.13-.01.259-.019.388-.024 5.002-.174 8.261 4.226 8.261 4.226s-3.743 4.69-7.643 4.69c-.338 0-.675-.031-1.007-.092v1.25c.278.038.558.057.838.057 3.629 0 6.253-1.91 8.794-4.169.421.347 2.146 1.193 2.501 1.564-2.416 2.083-8.048 3.763-11.24 3.763-.308 0-.603-.02-.894-.048V19.5H24v-15H10.21zm0 9.756v1.068c-3.356-.616-4.287-4.21-4.287-4.21a7.173 7.173 0 014.287-2.138v1.172h-.005a3.182 3.182 0 00-2.502 1.178s.615 2.276 2.507 2.931m-5.961-3.3c1.436-1.935 3.604-3.148 5.961-3.336V6.523C5.81 6.887 2 10.723 2 10.723s2.158 6.427 8.21 7.015v-1.166C5.77 16 4.25 10.958 4.25 10.958h-.002z\" fill=\"#74B71B\" fill-rule=\"nonzero\"></path></svg>",
    test: (id) => /^(nvidia-|nemotron)/i.test(id)
  },
  {
    key: "amazon",
    label: "Amazon",
    color: "#f97316",
    bg: "rgba(249, 115, 22, 0.12)",
    letter: "Amz",
    iconSvg: "<svg fill=\"#ff9900\" role=\"img\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><title>Amazon</title><path d=\"M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.525.13.12.174.09.336-.12.48-.256.19-.6.41-1.006.654-1.244.743-2.64 1.316-4.185 1.726a17.617 17.617 0 01-10.951-.577 17.88 17.88 0 01-5.43-3.35c-.1-.074-.151-.15-.151-.22 0-.047.021-.09.051-.13zm6.565-6.218c0-1.005.247-1.863.743-2.577.495-.71 1.17-1.25 2.04-1.615.796-.335 1.756-.575 2.912-.72.39-.046 1.033-.103 1.92-.174v-.37c0-.93-.105-1.558-.3-1.875-.302-.43-.78-.65-1.44-.65h-.182c-.48.046-.896.196-1.246.46-.35.27-.575.63-.675 1.096-.06.3-.206.465-.435.51l-2.52-.315c-.248-.06-.372-.18-.372-.39 0-.046.007-.09.022-.15.247-1.29.855-2.25 1.82-2.88.976-.616 2.1-.975 3.39-1.05h.54c1.65 0 2.957.434 3.888 1.29.135.15.27.3.405.48.12.165.224.314.283.45.075.134.15.33.195.57.06.254.105.42.135.51.03.104.062.3.076.615.01.313.02.493.02.553v5.28c0 .376.06.72.165 1.036.105.313.21.54.315.674l.51.674c.09.136.136.256.136.36 0 .12-.06.226-.18.314-1.2 1.05-1.86 1.62-1.963 1.71-.165.135-.375.15-.63.045a6.062 6.062 0 01-.526-.496l-.31-.347a9.391 9.391 0 01-.317-.42l-.3-.435c-.81.886-1.603 1.44-2.4 1.665-.494.15-1.093.227-1.83.227-1.11 0-2.04-.343-2.76-1.034-.72-.69-1.08-1.665-1.08-2.94l-.05-.076zm3.753-.438c0 .566.14 1.02.425 1.364.285.34.675.512 1.155.512.045 0 .106-.007.195-.02.09-.016.134-.023.166-.023.614-.16 1.08-.553 1.424-1.178.165-.28.285-.58.36-.91.09-.32.12-.59.135-.8.015-.195.015-.54.015-1.005v-.54c-.84 0-1.484.06-1.92.18-1.275.36-1.92 1.17-1.92 2.43l-.035-.02zm9.162 7.027c.03-.06.075-.11.132-.17.362-.243.714-.41 1.05-.5a8.094 8.094 0 011.612-.24c.14-.012.28 0 .41.03.65.06 1.05.168 1.172.33.063.09.099.228.099.39v.15c0 .51-.149 1.11-.424 1.8-.278.69-.664 1.248-1.156 1.68-.073.06-.14.09-.197.09-.03 0-.06 0-.09-.012-.09-.044-.107-.12-.064-.24.54-1.26.806-2.143.806-2.64 0-.15-.03-.27-.087-.344-.145-.166-.55-.257-1.224-.257-.243 0-.533.016-.87.046-.363.045-.7.09-1 .135-.09 0-.148-.014-.18-.044-.03-.03-.036-.047-.02-.077 0-.017.006-.03.02-.063v-.06z\"/></svg>",
    test: (id) => /^nova-/i.test(id)
  },
  {
    key: "stability",
    label: "Stability AI",
    color: "#a855f7",
    bg: "rgba(168, 85, 247, 0.12)",
    letter: "S",
    iconSvg: "<svg height=\"1em\" style=\"flex:none;line-height:1\" viewBox=\"0 0 24 24\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\"><title>Stability</title><path d=\"M7.223 21c4.252 0 7.018-2.22 7.018-5.56 0-2.59-1.682-4.236-4.69-4.918l-1.93-.571c-1.694-.375-2.683-.825-2.45-1.975.194-.957.773-1.497 2.122-1.497 4.285 0 5.873 1.497 5.873 1.497v-3.6S11.62 3 7.293 3C3.213 3 1 5.07 1 8.273c0 2.59 1.534 4.097 4.645 4.812l.334.083c.473.144 1.112.335 1.916.572 1.59.375 1.999.773 1.999 1.966 0 1.09-1.15 1.71-2.67 1.71C2.841 17.416 1 15.231 1 15.231v3.989S2.152 21 7.223 21z\" fill=\"url(#lobe-icons-stability-_R_0_)\"></path><path d=\"M20.374 20.73c1.505 0 2.626-1.073 2.626-2.526 0-1.484-1.089-2.526-2.626-2.526-1.505 0-2.594 1.042-2.594 2.526 0 1.484 1.089 2.526 2.594 2.526z\" fill=\"#E80000\"></path><defs><linearGradient id=\"lobe-icons-stability-_R_0_\" x1=\"50%\" x2=\"50%\" y1=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#9D39FF\"></stop><stop offset=\"100%\" stop-color=\"#A380FF\"></stop></linearGradient></defs></svg>",
    test: (id) => /^(stable-diffusion|stable-image)/i.test(id)
  },
  {
    key: "kimi",
    label: "Moonshot AI (Kimi)",
    color: "#06b6d4",
    bg: "rgba(6, 182, 212, 0.12)",
    letter: "K",
    iconSvg: "<svg height=\"1em\" style=\"flex:none;line-height:1\" viewBox=\"0 0 24 24\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\"><title>Kimi</title><path d=\"M21.846 0a1.923 1.923 0 110 3.846H20.15a.226.226 0 01-.227-.226V1.923C19.923.861 20.784 0 21.846 0z\" fill=\"#1783FF\"></path><path d=\"M11.065 11.199l7.257-7.2c.137-.136.06-.41-.116-.41H14.3a.164.164 0 00-.117.051l-7.82 7.756c-.122.12-.302.013-.302-.179V3.82c0-.127-.083-.23-.185-.23H3.186c-.103 0-.186.103-.186.23V19.77c0 .128.083.23.186.23h2.69c.103 0 .186-.102.186-.23v-3.25c0-.069.025-.135.069-.178l2.424-2.406a.158.158 0 01.205-.023l6.484 4.772a7.677 7.677 0 003.453 1.283c.108.012.2-.095.2-.23v-3.06c0-.117-.07-.212-.164-.227a5.028 5.028 0 01-2.027-.807l-5.613-4.064c-.117-.078-.132-.279-.028-.381z\" fill=\"#fff\"></path></svg>",
    test: (id) => /^kimi-/i.test(id)
  },
  {
    key: "minimax",
    label: "MiniMax",
    color: "#d946ef",
    bg: "rgba(217, 70, 239, 0.12)",
    letter: "MM",
    iconSvg: "<svg height=\"1em\" style=\"flex:none;line-height:1\" viewBox=\"0 0 24 24\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\"><title>Minimax</title><defs><linearGradient id=\"lobe-icons-minimax-_R_0_\" x1=\"0%\" x2=\"100.182%\" y1=\"50.057%\" y2=\"50.057%\"><stop offset=\"0%\" stop-color=\"#E2167E\"></stop><stop offset=\"100%\" stop-color=\"#FE603C\"></stop></linearGradient></defs><path d=\"M16.278 2c1.156 0 2.093.927 2.093 2.07v12.501a.74.74 0 00.744.709.74.74 0 00.743-.709V9.099a2.06 2.06 0 012.071-2.049A2.06 2.06 0 0124 9.1v6.561a.649.649 0 01-.652.645.649.649 0 01-.653-.645V9.1a.762.762 0 00-.766-.758.762.762 0 00-.766.758v7.472a2.037 2.037 0 01-2.048 2.026 2.037 2.037 0 01-2.048-2.026v-12.5a.785.785 0 00-.788-.753.785.785 0 00-.789.752l-.001 15.904A2.037 2.037 0 0113.441 22a2.037 2.037 0 01-2.048-2.026V18.04c0-.356.292-.645.652-.645.36 0 .652.289.652.645v1.934c0 .263.142.506.372.638.23.131.514.131.744 0a.734.734 0 00.372-.638V4.07c0-1.143.937-2.07 2.093-2.07zm-5.674 0c1.156 0 2.093.927 2.093 2.07v11.523a.648.648 0 01-.652.645.648.648 0 01-.652-.645V4.07a.785.785 0 00-.789-.78.785.785 0 00-.789.78v14.013a2.06 2.06 0 01-2.07 2.048 2.06 2.06 0 01-2.071-2.048V9.1a.762.762 0 00-.766-.758.762.762 0 00-.766.758v3.8a2.06 2.06 0 01-2.071 2.049A2.06 2.06 0 010 12.9v-1.378c0-.357.292-.646.652-.646.36 0 .653.29.653.646V12.9c0 .418.343.757.766.757s.766-.339.766-.757V9.099a2.06 2.06 0 012.07-2.048 2.06 2.06 0 012.071 2.048v8.984c0 .419.343.758.767.758.423 0 .766-.339.766-.758V4.07c0-1.143.937-2.07 2.093-2.07z\" fill=\"url(#lobe-icons-minimax-_R_0_)\" fill-rule=\"nonzero\"></path></svg>",
    test: (id) => /^minimax-/i.test(id)
  },
  {
    key: "glm",
    label: "Zhipu AI (GLM)",
    color: "#14b8a6",
    bg: "rgba(20, 184, 166, 0.12)",
    letter: "GLM",
    iconSvg: "<svg height=\"1em\" style=\"flex:none;line-height:1\" viewBox=\"0 0 24 24\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\"><title>Zhipu</title><path d=\"M11.991 23.503a.24.24 0 00-.244.248.24.24 0 00.244.249.24.24 0 00.245-.249.24.24 0 00-.22-.247l-.025-.001zM9.671 5.365a1.697 1.697 0 011.099 2.132l-.071.172-.016.04-.018.054c-.07.16-.104.32-.104.498-.035.71.47 1.279 1.186 1.314h.366c1.309.053 2.338 1.173 2.286 2.523-.052 1.332-1.152 2.38-2.478 2.327h-.174c-.715.018-1.274.64-1.239 1.368 0 .124.018.23.053.337.209.373.54.658.96.8.75.23 1.517-.125 1.9-.782l.018-.035c.402-.64 1.17-.96 1.92-.711.854.284 1.378 1.226 1.099 2.167a1.661 1.661 0 01-2.077 1.102 1.711 1.711 0 01-.907-.711l-.017-.035c-.2-.323-.463-.58-.851-.711l-.056-.018a1.646 1.646 0 00-1.954.746 1.66 1.66 0 01-1.065.764 1.677 1.677 0 01-1.989-1.279c-.209-.906.332-1.83 1.257-2.043a1.51 1.51 0 01.296-.035h.018c.68-.071 1.151-.622 1.116-1.333a1.307 1.307 0 00-.227-.693 2.515 2.515 0 01-.366-1.403 2.39 2.39 0 01.366-1.208c.14-.195.21-.444.227-.693.018-.71-.506-1.261-1.186-1.332l-.07-.018a1.43 1.43 0 01-.299-.07l-.05-.019a1.7 1.7 0 01-1.047-2.114 1.68 1.68 0 012.094-1.101zm-5.575 10.11c.26-.264.639-.367.994-.27.355.096.633.379.728.74.095.362-.007.748-.267 1.013-.402.41-1.053.41-1.455 0a1.062 1.062 0 010-1.482zm14.845-.294c.359-.09.738.024.992.297.254.274.344.665.237 1.025-.107.36-.396.634-.756.718-.551.128-1.1-.22-1.23-.781a1.05 1.05 0 01.757-1.26zm-.064-4.39c.314.32.49.753.49 1.206 0 .452-.176.886-.49 1.206-.315.32-.74.5-1.185.5-.444 0-.87-.18-1.184-.5a1.727 1.727 0 010-2.412 1.654 1.654 0 012.369 0zm-11.243.163c.364.484.447 1.128.218 1.691a1.665 1.665 0 01-2.188.923c-.855-.36-1.26-1.358-.907-2.228a1.68 1.68 0 011.33-1.038c.593-.08 1.183.169 1.547.652zm11.545-4.221c.368 0 .708.2.892.524.184.324.184.724 0 1.048a1.026 1.026 0 01-.892.524c-.568 0-1.03-.47-1.03-1.048 0-.579.462-1.048 1.03-1.048zm-14.358 0c.368 0 .707.2.891.524.184.324.184.724 0 1.048a1.026 1.026 0 01-.891.524c-.569 0-1.03-.47-1.03-1.048 0-.579.461-1.048 1.03-1.048zm10.031-1.475c.925 0 1.675.764 1.675 1.706s-.75 1.705-1.675 1.705-1.674-.763-1.674-1.705c0-.942.75-1.706 1.674-1.706zm-2.626-.684c.362-.082.653-.356.761-.718a1.062 1.062 0 00-.238-1.028 1.017 1.017 0 00-.996-.294c-.547.14-.881.7-.752 1.257.13.558.675.907 1.225.783zm0 16.876c.359-.087.644-.36.75-.72a1.062 1.062 0 00-.237-1.019 1.018 1.018 0 00-.985-.301 1.037 1.037 0 00-.762.717c-.108.361-.017.754.239 1.028.245.263.606.377.953.305l.043-.01zM17.19 3.5a.631.631 0 00.628-.64c0-.355-.279-.64-.628-.64a.631.631 0 00-.628.64c0 .355.28.64.628.64zm-10.38 0a.631.631 0 00.628-.64c0-.355-.28-.64-.628-.64a.631.631 0 00-.628.64c0 .355.279.64.628.64zm-5.182 7.852a.631.631 0 00-.628.64c0 .354.28.639.628.639a.63.63 0 00.627-.606l.001-.034a.62.62 0 00-.628-.64zm5.182 9.13a.631.631 0 00-.628.64c0 .355.279.64.628.64a.631.631 0 00.628-.64c0-.355-.28-.64-.628-.64zm10.38.018a.631.631 0 00-.628.64c0 .355.28.64.628.64a.631.631 0 00.628-.64c0-.355-.279-.64-.628-.64zm5.182-9.148a.631.631 0 00-.628.64c0 .354.279.639.628.639a.631.631 0 00.628-.64c0-.355-.28-.64-.628-.64zm-.384-4.992a.24.24 0 00.244-.249.24.24 0 00-.244-.249.24.24 0 00-.244.249c0 .142.122.249.244.249zM11.991.497a.24.24 0 00.245-.248A.24.24 0 0011.99 0a.24.24 0 00-.244.249c0 .133.108.236.223.247l.021.001zM2.011 6.36a.24.24 0 00.245-.249.24.24 0 00-.244-.249.24.24 0 00-.244.249.24.24 0 00.244.249zm0 11.263a.24.24 0 00-.243.248.24.24 0 00.244.249.24.24 0 00.244-.249.252.252 0 00-.244-.248zm19.995-.018a.24.24 0 00-.245.248.24.24 0 00.245.25.24.24 0 00.244-.25.252.252 0 00-.244-.248z\" fill=\"#3859FF\" fill-rule=\"nonzero\"></path></svg>",
    test: (id) => /^glm-/i.test(id)
  },
  {
    key: "stepfun",
    label: "StepFun",
    color: "#fb7185",
    bg: "rgba(251, 113, 133, 0.12)",
    letter: "Step",
    iconSvg: "<svg height=\"1em\" style=\"flex:none;line-height:1\" viewBox=\"0 0 24 24\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\"><title>Stepfun</title><path d=\"M22.012 0h1.032v.927H24v.968h-.956V3.78h-1.032V1.896h-1.878v-.97h1.878V0zM2.6 12.371V1.87h.969v10.502h-.97zm10.423.66h10.95v.918h-6.208v9.579h-4.742V13.03zM5.629 3.333v12.356H0v4.51h10.386V8L20.859 8l-.003-4.668-15.227.001z\" fill=\"url(#lobe-icons-stepfun-_R_0_)\" fill-rule=\"evenodd\"></path><defs><linearGradient gradientUnits=\"userSpaceOnUse\" id=\"lobe-icons-stepfun-_R_0_\" x1=\"1.646\" x2=\"18.342\" y1=\"1.916\" y2=\"22.091\"><stop stop-color=\"#01A9FF\"></stop><stop offset=\"1\" stop-color=\"#0160FF\"></stop></linearGradient></defs></svg>",
    test: (id) => /^step-/i.test(id)
  },
  {
    key: "ring",
    label: "InclusionAI (Ring)",
    color: "#eab308",
    bg: "rgba(234, 179, 8, 0.12)",
    letter: "Ring",
    iconSvg: "<svg viewBox=\"0 0 24 24\" fill=\"none\"><circle cx=\"12\" cy=\"12\" r=\"9\" stroke=\"#eab308\" stroke-width=\"2.5\"/><circle cx=\"12\" cy=\"12\" r=\"4.5\" fill=\"#eab308\"/></svg>",
    test: (id) => /^ring-/i.test(id)
  },
  {
    key: "xiaomi",
    label: "Xiaomi (MiMo)",
    color: "#ff6900",
    bg: "rgba(255, 105, 0, 0.12)",
    letter: "MI",
    iconSvg: "<svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"24\" height=\"24\" rx=\"5\" fill=\"#ff6900\"/><path d=\"M6 8h2v8H6V8zm4 0h3a2 2 0 0 1 2 2v6h-2v-5a1 1 0 0 0-1-1h-2v6h-2V8zm8 0h2v8h-2V8z\" fill=\"#fff\"/></svg>",
    test: (id) => /^(xiaomi|mimo-)/i.test(id)
  }
];

const VENDOR_OTHER = {
  key: "other",
  label: "Other Providers",
  color: "#94a3b8",
  bg: "rgba(148, 163, 184, 0.12)",
  letter: "?",
  iconSvg: "<svg viewBox=\"0 0 24 24\" fill=\"none\"><circle cx=\"12\" cy=\"12\" r=\"8\" stroke=\"#94a3b8\" stroke-width=\"2\"/><path d=\"M9 12h6M12 9v6\" stroke=\"#94a3b8\" stroke-width=\"2\" stroke-linecap=\"round\"/></svg>"
};

// Selected Models per modality
let selectedModels = {
  chat: "rone-free",
  image: "gemini-3.1-flash-image",
  audio: "tts-1",
  embed: "text-embedding-3-small"
};

// Active state for unified workbench
let activeWorkbenchModality = "chat";
let activeWorkbenchLang = "curl";

// Image sub-mode: 'generation' | 'edit'
let imageSubMode = "generation";
let uploadedImageBase64 = "";
let uploadedImageFile = null;

// In-memory model registry
let currentModelMap = new Map();
let currentModalModel = null;

// ── Cookie & LocalStorage Storage Helpers ───────────────────────────────────
function setStoredValue(name, value, days = 365) {
  if (!value) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Lax";
    try { localStorage.removeItem(name); } catch (e) {}
    return;
  }
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = name + "=" + encodeURIComponent(value) + "; expires=" + expires + "; path=/; SameSite=Lax";
  try { localStorage.setItem(name, value); } catch (e) {}
}

function getStoredValue(name) {
  try {
    const val = localStorage.getItem(name);
    if (val) return val;
  } catch (e) {}
  const match = document.cookie.match(new RegExp("(?:^|; )" + name + "=([^;]*)"));
  return match ? decodeURIComponent(match[1]) : null;
}

// ── Token Limit Formatter (e.g. 200000 -> 200k, 1000000 -> 1M) ──────────────
function formatTokenCount(num) {
  if (!num || isNaN(num)) return null;
  if (num >= 1000000) {
    const m = num / 1000000;
    return (m % 1 === 0 ? m.toFixed(0) : m.toFixed(1)) + "M";
  }
  if (num >= 1000) {
    const k = num / 1000;
    return (k % 1 === 0 ? k.toFixed(0) : k.toFixed(1)) + "k";
  }
  return String(num);
}

// ── Modality Classification ────────────────────────────────────────────────
function getModality(id, meta) {
  const name = id.toLowerCase();
  const mode = (meta?.mode || "").toLowerCase();
  const mods = (meta?.modality || []).map(m => String(m).toLowerCase());

  if (mode.includes("image") || name.includes("image") || name.includes("cogview") || name.includes("flux") || name.includes("dall-e") || name.startsWith("stable-") || name.startsWith("gpt-image") || name.includes("midjourney") || name.includes("recraft")) {
    return "image";
  }
  if (mode.includes("audio") || name.startsWith("tts-") || name.includes("-tts") || name.includes("whisper") || name.includes("transcribe") || name.includes("realtime") || name.includes("speech") || name.includes("voice")) {
    return "audio";
  }
  if (mode.includes("embed") || name.includes("embed") || mods.includes("embedding") || name.includes("bge-")) {
    return "embed";
  }
  return "chat";
}

function getVendor(id, meta) {
  const cleanId = id.includes('/') ? id.split('/').slice(1).join('/') : id;
  const prefix = id.includes('/') ? id.split('/')[0].toLowerCase() : '';

  for (const rule of VENDOR_RULES) {
    if (rule.test(id, meta) || rule.test(cleanId, meta) || (prefix && rule.key === prefix) || (prefix === "google" && rule.key === "google") || (prefix === "z-ai" && rule.key === "glm") || (prefix === "cognitivecomputations" && rule.key === "mistral")) {
      return rule;
    }
  }
  return VENDOR_OTHER;
}

// ── Base URL & Key Helpers ─────────────────────────────────────────────────
function normalizeBaseUrl(url) {
  let normalized = (url || DEFAULT_BASE_URL).trim().replace(/\/+$/, "");
  const suffixes = ["/models", "/chat/completions", "/embeddings", "/audio/speech", "/images/generations", "/images/edits", "/model/info"];
  for (const suffix of suffixes) {
    if (normalized.toLowerCase().endsWith(suffix)) {
      normalized = normalized.slice(0, -suffix.length).replace(/\/+$/, "");
      break;
    }
  }
  try {
    const parsed = new URL(normalized);
    if (!parsed.pathname || parsed.pathname === "/" || parsed.pathname === "") {
      normalized = normalized.replace(/\/+$/, "") + "/v1";
    }
  } catch (e) {}

  return normalized || DEFAULT_BASE_URL;
}

function getBaseUrl() {
  const el = document.getElementById("baseUrl");
  return normalizeBaseUrl(el ? el.value : DEFAULT_BASE_URL);
}

function getKey() {
  const el = document.getElementById("apiKey");
  return el ? el.value.trim() : "";
}

function escapeJson(str) {
  return JSON.stringify(str || "").slice(1, -1);
}

// ── App Initialization ─────────────────────────────────────────────────────
function initApp() {
  currentModelMap.clear();
  for (const [name, meta] of Object.entries(MODEL_CATALOG)) {
    currentModelMap.set(name, { id: name, ...meta });
  }

  const storedBaseUrl = getStoredValue("v1_base_url");
  const storedApiKey = getStoredValue("v1_api_key");

  const baseInput = document.getElementById("baseUrl");
  const keyInput = document.getElementById("apiKey");

  if (storedBaseUrl && baseInput) {
    baseInput.value = storedBaseUrl;
  }
  if (storedApiKey && keyInput) {
    keyInput.value = storedApiKey;
  }

  renderAllModalityGrids();
  switchActiveModality("chat");
  updateHeaderCount();
  applyShowDetailsState();

  if (storedApiKey) {
    setStatus("Restored saved credentials from cookie. Syncing live models...", "loading");
    fetchModels(true);
  }
}

// ── Show Details & Filtering State ────────────────────────────────────────
let showDetails = false;
let activeProviderFilter = "all";
let activeProtocolFilter = "all";

function toggleShowDetails() {
  showDetails = !showDetails;
  applyShowDetailsState();
}

function applyShowDetailsState() {
  const btn = document.getElementById("toggleDetailsBtn");
  const body = document.body;

  if (showDetails) {
    body.classList.add("show-details-active");
    if (btn) {
      btn.classList.add("active");
      btn.setAttribute("aria-pressed", "true");
    }
  } else {
    body.classList.remove("show-details-active");
    if (btn) {
      btn.classList.remove("active");
      btn.setAttribute("aria-pressed", "false");
    }
    if (activeProtocolFilter !== "all") {
      setProtocolFilter("all");
    }
    if (activeProviderFilter !== "all") {
      setProviderFilter("all");
    }
  }
}

function setProviderFilter(prov) {
  activeProviderFilter = prov;
  const pills = document.querySelectorAll("#providerFilterPills .filter-pill");
  pills.forEach(p => {
    if (p.dataset.provider === prov) {
      p.classList.add("active");
    } else {
      p.classList.remove("active");
    }
  });
  const searchInput = document.getElementById("globalSearch");
  renderAllModalityGrids(searchInput ? searchInput.value : "");
}

function setProtocolFilter(proto) {
  activeProtocolFilter = proto;
  const pills = document.querySelectorAll("#protocolFilterPills .filter-pill");
  pills.forEach(p => {
    if (p.dataset.protocol === proto) {
      p.classList.add("active");
    } else {
      p.classList.remove("active");
    }
  });
  const searchInput = document.getElementById("globalSearch");
  renderAllModalityGrids(searchInput ? searchInput.value : "");
}

function getCloudProvider(id, meta) {
  const p = (meta?.provider || "").toLowerCase();
  const lp = (meta?.litellm_provider || "").toLowerCase();
  const name = id.toLowerCase();
  const desc = (meta?.desc || "").toLowerCase();

  // 1. TrendMicro / On-Premise
  if (p.includes("trendmicro") || lp === "trendmicro" || name === "mock-llm" || /(-gmi|-gmi-ray|-ray)$/i.test(name) || /^(rone-|primus-|cybertron-)/i.test(name) || desc.includes("(trendmicro)")) {
    return "trendmicro";
  }

  // 2. Azure
  if (p.includes("azure") || p.includes("foundry") || lp.includes("azure") || name.endsWith("-azure") || name.includes("azure")) {
    return "azure";
  }

  // 3. AWS Bedrock / AWS
  if (p.includes("aws") || p.includes("bedrock") || lp.includes("bedrock") || lp.includes("aws") || name.endsWith("-aws") || name.includes("bedrock")) {
    return "aws";
  }

  // 4. GCP / Google Cloud Vertex AI
  if (p.includes("vertex") || p.includes("gcp") || p.includes("google") || lp.includes("vertex") || lp.includes("google") || name.endsWith("-gcp") || name.startsWith("gemini-") || name.startsWith("gemma-")) {
    return "gcp";
  }

  return "direct";
}

function getSupportedProtocols(id, meta) {
  const list = [];
  const name = id.toLowerCase();
  const mode = (meta?.mode || "").toLowerCase();
  const liteProvider = (meta?.litellm_provider || "").toLowerCase();

  if (mode === "responses") list.push("responses");
  if (name.includes("claude") || liteProvider === "anthropic" || (liteProvider === "bedrock" && name.includes("claude")) || (liteProvider === "vertex_ai" && name.includes("claude"))) {
    list.push("messages");
  }
  if (mode === "chat" || mode === "responses" || (!mode.includes("embed") && !mode.includes("audio") && !mode.includes("image"))) {
    list.push("chat");
  }
  return list;
}

function getPrimaryProtocolTag(id, meta) {
  const mod = getModality(id, meta);
  if (mod === "embed") return { key: "embed", label: "/embed", title: "Endpoint: /v1/embeddings" };
  if (mod === "image") return { key: "image", label: "/images", title: "Endpoint: /v1/images/generations & edits" };
  if (mod === "audio") return { key: "audio", label: "/audio", title: "Endpoint: /v1/audio/speech & transcriptions" };

  const mode = (meta?.mode || "").toLowerCase();
  const name = id.toLowerCase();
  const liteProvider = (meta?.litellm_provider || "").toLowerCase();

  if (mode === "responses") {
    return { key: "responses", label: "/responses", title: "Primary Protocol: /v1/responses (also compatible with /chat/completions)" };
  }
  if (name.includes("claude") || liteProvider === "anthropic" || (liteProvider === "bedrock" && name.includes("claude")) || (liteProvider === "vertex_ai" && name.includes("claude"))) {
    return { key: "messages", label: "/messages", title: "Primary Protocol: /v1/messages (also compatible with /chat/completions)" };
  }
  return { key: "chat", label: "/chat", title: "Primary Protocol: /v1/chat/completions" };
}

function updateHeaderCount() {
  const total = currentModelMap.size;
  const badge = document.getElementById("headerModelCount");
  if (badge) badge.textContent = total + " Models Cataloged";
}

// ── Render All Modality Grids & Auto-Hide Empty Ones ───────────────────────
function renderAllModalityGrids(filterText = "") {
  const filter = filterText.trim().toLowerCase();

  const modalityBuckets = {
    chat: [],
    image: [],
    audio: [],
    embed: []
  };

  for (const [id, meta] of currentModelMap.entries()) {
    if (filter) {
      const vendor = getVendor(id, meta);
      const match = id.toLowerCase().includes(filter) ||
                    vendor.label.toLowerCase().includes(filter) ||
                    (meta.desc && meta.desc.toLowerCase().includes(filter));
      if (!match) continue;
    }

    if (activeProviderFilter !== "all") {
      const prov = getCloudProvider(id, meta);
      if (prov !== activeProviderFilter) {
        continue;
      }
    }

    if (activeProtocolFilter !== "all") {
      const protos = getSupportedProtocols(id, meta);
      if (!protos.includes(activeProtocolFilter)) {
        continue;
      }
    }

    const mod = getModality(id, meta);
    modalityBuckets[mod].push({ id, meta });
  }

  const modalities = ["chat", "image", "audio", "embed"];
  const navIdMap = {
    chat: "navLinkChat",
    image: "navLinkImage",
    audio: "navLinkAudio",
    embed: "navLinkEmbed"
  };

  let firstAvailableModality = null;

  for (const mod of modalities) {
    const count = modalityBuckets[mod].length;
    const sectionEl = document.getElementById("row-" + mod);
    const navEl = document.getElementById(navIdMap[mod]);
    const tabEl = document.querySelector('#workbenchModalityTabs [data-mod="' + mod + '"]');

    if (count === 0) {
      if (sectionEl) sectionEl.style.display = "none";
      if (navEl) navEl.style.display = "none";
      if (tabEl) tabEl.style.display = "none";
    } else {
      if (sectionEl) sectionEl.style.display = "";
      if (navEl) navEl.style.display = "";
      if (tabEl) tabEl.style.display = "";

      if (!firstAvailableModality) firstAvailableModality = mod;

      const countEl = document.getElementById(mod + "ModelCount");
      if (countEl) countEl.textContent = count + " models";

      renderModalityGrid(mod, modalityBuckets[mod]);
    }
  }

  if (modalityBuckets[activeWorkbenchModality].length === 0 && firstAvailableModality) {
    switchActiveModality(firstAvailableModality);
  } else {
    updateWorkbenchSnippet();
  }
}

function renderModalityGrid(modality, items) {
  const gridContainer = document.getElementById(modality + "VendorGrid");
  if (!gridContainer) return;

  gridContainer.innerHTML = "";

  const vendorMap = new Map();
  for (const rule of VENDOR_RULES) {
    vendorMap.set(rule.key, { vendor: rule, models: [] });
  }
  vendorMap.set(VENDOR_OTHER.key, { vendor: VENDOR_OTHER, models: [] });

  for (const item of items) {
    const v = getVendor(item.id, item.meta);
    vendorMap.get(v.key).models.push(item);
  }

  for (const [key, data] of vendorMap.entries()) {
    if (data.models.length === 0) continue;

    const vendor = data.vendor;
    const card = document.createElement("div");
    card.className = "vendor-card";

    const header = document.createElement("div");
    header.className = "vendor-card-header";
    header.innerHTML = '<span class="vendor-icon" style="background:' + vendor.bg + '">' + (vendor.iconSvg || vendor.letter) + '</span>' +
      '<span>' + vendor.label + '</span>' +
      '<span class="count-badge">' + data.models.length + '</span>';
    card.appendChild(header);

    const body = document.createElement("div");
    body.className = "vendor-card-body";

    data.models.sort((a, b) => {
      const dateA = a.meta?.releaseDate || "2024-01-01";
      const dateB = b.meta?.releaseDate || "2024-01-01";
      if (dateB !== dateA) return dateB.localeCompare(dateA);

      const priceA = (a.meta?.outCost ?? a.meta?.inCost ?? 0);
      const priceB = (b.meta?.outCost ?? b.meta?.inCost ?? 0);
      if (priceB !== priceA) return priceB - priceA;

      return a.id.localeCompare(b.id);
    });

    for (const model of data.models) {
      const row = createModelRow(modality, model.id, model.meta, vendor);
      body.appendChild(row);
    }

    card.appendChild(body);
    gridContainer.appendChild(card);
  }
}

function createModelRow(modality, id, meta, vendor) {
  const row = document.createElement("div");
  row.className = "model-row" + (selectedModels[modality] === id ? " selected-model" : "");
  row.dataset.modelId = id;
  row.dataset.modality = modality;

  const infoCol = document.createElement("div");
  infoCol.className = "model-info-col";

  const nameSpan = document.createElement("span");
  nameSpan.className = "model-name";
  nameSpan.textContent = id;
  nameSpan.title = id;
  infoCol.appendChild(nameSpan);

  // Row 1: Release Date, Pricing & Health Badges
  const metaRow1 = document.createElement("div");
  metaRow1.className = "model-meta-row";

  // 1. Release Date Badge
  if (meta?.releaseDate) {
    const dateBadge = document.createElement("span");
    dateBadge.className = "date-badge";
    dateBadge.textContent = meta.releaseDate.slice(0, 7);
    dateBadge.title = "Release Date: " + meta.releaseDate;
    metaRow1.appendChild(dateBadge);
  }

  // 2. Pricing Badge
  const inCost = meta?.inCost;
  const outCost = meta?.outCost;
  const priceBadge = document.createElement("span");

  if (inCost === 0 && outCost === 0) {
    priceBadge.className = "price-badge free";
    priceBadge.textContent = "FREE";
  } else if (inCost != null && outCost != null) {
    priceBadge.className = "price-badge standard";
    priceBadge.textContent = "$" + inCost + " / $" + outCost;
    priceBadge.title = "Input: $" + inCost + "/1M · Output: $" + outCost + "/1M";
  } else if (inCost != null) {
    priceBadge.className = "price-badge standard";
    priceBadge.textContent = "$" + inCost + "/1M";
  } else {
    priceBadge.className = "price-badge standard";
    priceBadge.textContent = "Gateway standard";
  }
  metaRow1.appendChild(priceBadge);

  // 3. Health Indicator Badge (Pure text)
  const health = meta?.health || { total: 1, online: 1 };
  const totalServers = Math.max(health.total || 1, 1);
  const onlineServers = health.online != null ? health.online : totalServers;
  const isAllOnline = onlineServers === totalServers && totalServers > 0;
  const isAllOffline = onlineServers === 0;

  const healthBadge = document.createElement("span");
  healthBadge.className = "health-badge " + (isAllOnline ? "online" : isAllOffline ? "offline" : "degraded");
  healthBadge.title = "Service Health: " + onlineServers + "/" + totalServers + " backend instances online";
  healthBadge.textContent = onlineServers + "/" + totalServers + " online";
  metaRow1.appendChild(healthBadge);

  infoCol.appendChild(metaRow1);

  // Row 2: Max Input, Max Output Token Limits & Protocol Tag
  const metaRow2 = document.createElement("div");
  metaRow2.className = "model-meta-row model-tokens-row";

  if (meta?.maxInputTokens) {
    const inText = formatTokenCount(meta.maxInputTokens);
    const inBadge = document.createElement("span");
    inBadge.className = "token-limit-badge in-limit";
    inBadge.textContent = inText + " in";
    inBadge.title = "Max Input Prompt Limit: " + meta.maxInputTokens.toLocaleString() + " tokens";
    metaRow2.appendChild(inBadge);
  }

  if (meta?.maxOutputTokens) {
    const outText = formatTokenCount(meta.maxOutputTokens);
    const outBadge = document.createElement("span");
    outBadge.className = "token-limit-badge out-limit";
    outBadge.textContent = outText + " out";
    outBadge.title = "Max Output Generation Limit: " + meta.maxOutputTokens.toLocaleString() + " tokens";
    metaRow2.appendChild(outBadge);
  }

  const proto = getPrimaryProtocolTag(id, meta);
  if (proto) {
    const protoBadge = document.createElement("span");
    protoBadge.className = "protocol-tag " + proto.key;
    protoBadge.textContent = proto.label;
    protoBadge.title = proto.title;
    metaRow2.appendChild(protoBadge);
  }

  infoCol.appendChild(metaRow2);

  row.appendChild(infoCol);

  const actionsCol = document.createElement("div");
  actionsCol.className = "model-actions-col";

  const infoBtn = document.createElement("button");
  infoBtn.className = "info-btn";
  infoBtn.innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="10" r="8"/><line x1="12" y1="14" x2="12" y2="10"/><line x1="12" y1="7" x2="12.01" y2="7"/></svg>';
  infoBtn.title = "View model details";
  infoBtn.onclick = (e) => {
    e.stopPropagation();
    openModelModal(id, meta, vendor, modality);
  };
  actionsCol.appendChild(infoBtn);

  const copyBtn = document.createElement("button");
  copyBtn.className = "copy-mini-btn";
  copyBtn.textContent = "Copy";
  copyBtn.title = "Copy model name & activate in workbench";
  copyBtn.onclick = (e) => {
    e.stopPropagation();
    onModelClicked(modality, id);
    flashCopyButton(copyBtn);
  };
  actionsCol.appendChild(copyBtn);

  row.appendChild(actionsCol);

  row.onclick = () => {
    onModelClicked(modality, id);
    flashCopyButton(copyBtn);
  };

  return row;
}

function flashCopyButton(btn) {
  if (!btn) return;
  const orig = btn.textContent;
  btn.textContent = "Copied!";
  btn.classList.add("copied");
  setTimeout(() => {
    btn.textContent = orig;
    btn.classList.remove("copied");
  }, 1400);
}

// ── Model Selection & Auto Modality Switch ─────────────────────────────────
function onModelClicked(modality, id) {
  navigator.clipboard.writeText(id).then(() => {
    showToast("Copied & selected: " + id);
  }).catch(() => {
    showToast("Selected: " + id);
  });

  selectedModels[modality] = id;

  const grid = document.getElementById(modality + "VendorGrid");
  if (grid) {
    grid.querySelectorAll(".model-row").forEach(r => {
      r.classList.toggle("selected-model", r.dataset.modelId === id);
    });
  }

  const tagEl = document.getElementById("active" + capitalize(modality) + "ModelName");
  if (tagEl) tagEl.textContent = id;

  switchActiveModality(modality);
}

function switchActiveModality(modality) {
  activeWorkbenchModality = modality;

  document.querySelectorAll("#workbenchModalityTabs .mod-tab-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.mod === modality);
  });

  const modalities = ["chat", "image", "audio", "embed"];
  for (const m of modalities) {
    const ctrl = document.getElementById("controls-" + m);
    if (ctrl) ctrl.style.display = (m === modality) ? "" : "none";
  }

  const modLabels = { chat: "Text Chat", image: "Image Studio", audio: "Voice & Audio", embed: "Vector Embedding" };
  const targetBadge = document.getElementById("wbTargetModBadge");
  if (targetBadge) targetBadge.textContent = modLabels[modality] || "Tester";

  const targetCode = document.getElementById("wbTargetModelCode");
  if (targetCode) targetCode.textContent = selectedModels[modality] || "Default";

  updateExecuteButtonLabel();
  updateWorkbenchSnippet();
}

function updateExecuteButtonLabel() {
  const btnLabelEl = document.getElementById("btnExecuteLabel");
  if (!btnLabelEl) return;

  if (activeWorkbenchModality === "chat") {
    btnLabelEl.textContent = "Send Request";
  } else if (activeWorkbenchModality === "image") {
    btnLabelEl.textContent = imageSubMode === "edit" ? "Edit / Inpaint Image" : "Generate Image";
  } else if (activeWorkbenchModality === "audio") {
    btnLabelEl.textContent = "Synthesize Speech";
  } else if (activeWorkbenchModality === "embed") {
    btnLabelEl.textContent = "Calculate Vector";
  }
}

// ── Image Sub-Mode (Generation vs Edit/Inpaint) ─────────────────────────────
function setImageSubMode(mode) {
  imageSubMode = mode;

  const btnGen = document.getElementById("btnImgModeGen");
  const btnEdit = document.getElementById("btnImgModeEdit");
  const uploadSec = document.getElementById("imageEditUploadSection");
  const hint = document.getElementById("imgSubModeHint");
  const promptLabel = document.getElementById("imagePromptLabel");

  if (btnGen) btnGen.classList.toggle("active", mode === "generation");
  if (btnEdit) btnEdit.classList.toggle("active", mode === "edit");

  if (mode === "edit") {
    if (uploadSec) uploadSec.style.display = "flex";
    if (hint) hint.textContent = "Upload reference image and enter inpainting / transformation instructions";
    if (promptLabel) promptLabel.textContent = "Edit Instructions / Inpaint Prompt";
  } else {
    if (uploadSec) uploadSec.style.display = "none";
    if (hint) hint.textContent = "Generate high quality images from text prompts";
    if (promptLabel) promptLabel.textContent = "Prompt";
  }

  updateExecuteButtonLabel();
  updateWorkbenchSnippet();
}

function handleImageFileUpload(e) {
  const file = e.target.files?.[0];
  if (!file) return;

  uploadedImageFile = file;

  const reader = new FileReader();
  reader.onload = function(evt) {
    uploadedImageBase64 = evt.target.result;

    const thumb = document.getElementById("sourceImageThumb");
    const nameEl = document.getElementById("sourceImageName");
    const sizeEl = document.getElementById("sourceImageSize");
    const emptyBox = document.getElementById("dropzoneEmpty");
    const previewBox = document.getElementById("dropzonePreview");

    if (thumb) thumb.src = uploadedImageBase64;
    if (nameEl) nameEl.textContent = file.name;
    if (sizeEl) sizeEl.textContent = (file.size / 1024).toFixed(1) + " KB";

    if (emptyBox) emptyBox.style.display = "none";
    if (previewBox) previewBox.style.display = "flex";

    showToast("Uploaded: " + file.name);
    updateWorkbenchSnippet();
  };
  reader.readAsDataURL(file);
}

function removeUploadedImage() {
  uploadedImageBase64 = "";
  uploadedImageFile = null;

  const fileInput = document.getElementById("imageFileInput");
  if (fileInput) fileInput.value = "";

  const emptyBox = document.getElementById("dropzoneEmpty");
  const previewBox = document.getElementById("dropzonePreview");
  if (emptyBox) emptyBox.style.display = "flex";
  if (previewBox) previewBox.style.display = "none";

  showToast("Reference image removed");
  updateWorkbenchSnippet();
}

function setWorkbenchLang(lang) {
  activeWorkbenchLang = lang;

  document.querySelectorAll(".lang-selector .lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  const langNames = { curl: "cURL Request", py: "Python (OpenAI SDK)", ps: "PowerShell", js: "JavaScript (Fetch)" };
  const labelEl = document.getElementById("wbCodeLang");
  if (labelEl) labelEl.textContent = langNames[lang] || "Request Code";

  updateWorkbenchSnippet();
}

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

// ── Search & Filter ────────────────────────────────────────────────────────
function filterAllModels(text) {
  const clearBtn = document.getElementById("clearSearchBtn");
  if (clearBtn) clearBtn.style.display = text ? "block" : "none";
  renderAllModalityGrids(text);
}

function clearSearch() {
  const searchInput = document.getElementById("globalSearch");
  if (searchInput) {
    searchInput.value = "";
    filterAllModels("");
  }
}

// ── Dynamic Code Snippets Generation ───────────────────────────────────────
function updateWorkbenchSnippet() {
  const codeEl = document.getElementById("wbCodeSnippet");
  if (!codeEl) return;

  const modality = activeWorkbenchModality;
  const lang = activeWorkbenchLang;
  const baseUrl = getBaseUrl();
  const key = getKey() || "{{ YOUR_API_KEY }}";
  const model = selectedModels[modality] || "default-model";

  let snippet = "";

  if (modality === "chat") {
    const sysPrompt = (document.getElementById("chatSystemPrompt")?.value || "").trim();
    const userMsg = (document.getElementById("chatUserMessage")?.value || "").trim() || "Hello!";
    const temp = parseFloat(document.getElementById("chatTemperature")?.value || "0.7");
    const maxTokens = parseInt(document.getElementById("chatMaxTokens")?.value || "1000", 10);
    const isStream = document.getElementById("chatStreamToggle") ? document.getElementById("chatStreamToggle").checked : true;

    const messages = [];
    if (sysPrompt) messages.push({ role: "system", content: sysPrompt });
    messages.push({ role: "user", content: userMsg });

    if (lang === "curl") {
      snippet = "curl --location '" + baseUrl + "/chat/completions' \\\n" +
        "  --header 'Content-Type: application/json' \\\n" +
        "  --header 'Authorization: Bearer " + key + "' \\\n" +
        "  --data '{\n" +
        "    \"model\": \"" + model + "\",\n" +
        "    \"messages\": " + JSON.stringify(messages, null, 6).replace(/\n/g, "\n    ") + ",\n" +
        "    \"temperature\": " + temp + ",\n" +
        "    \"max_tokens\": " + maxTokens + ",\n" +
        "    \"stream\": " + isStream + "\n" +
        "  }'";
    } else if (lang === "py") {
      if (isStream) {
        snippet = "import openai\n\n" +
          "client = openai.OpenAI(\n" +
          "    base_url=\"" + baseUrl + "\",\n" +
          "    api_key=\"" + key + "\"\n" +
          ")\n\n" +
          "stream = client.chat.completions.create(\n" +
          "    model=\"" + model + "\",\n" +
          "    messages=" + JSON.stringify(messages, null, 4) + ",\n" +
          "    temperature=" + temp + ",\n" +
          "    max_tokens=" + maxTokens + ",\n" +
          "    stream=True\n" +
          ")\n\n" +
          "for chunk in stream:\n" +
          "    if chunk.choices and chunk.choices[0].delta.content:\n" +
          "        print(chunk.choices[0].delta.content, end=\"\", flush=True)";
      } else {
        snippet = "import openai\n\n" +
          "client = openai.OpenAI(\n" +
          "    base_url=\"" + baseUrl + "\",\n" +
          "    api_key=\"" + key + "\"\n" +
          ")\n\n" +
          "response = client.chat.completions.create(\n" +
          "    model=\"" + model + "\",\n" +
          "    messages=" + JSON.stringify(messages, null, 4) + ",\n" +
          "    temperature=" + temp + ",\n" +
          "    max_tokens=" + maxTokens + ",\n" +
          "    stream=False\n" +
          ")\n\n" +
          "print(response.choices[0].message.content)";
      }
    } else if (lang === "ps") {
      snippet = "$headers = @{\n" +
        "    \"Content-Type\"  = \"application/json\"\n" +
        "    \"Authorization\" = \"Bearer " + key + "\"\n" +
        "}\n\n" +
        "$body = @'\n" +
        "{\n" +
        "    \"model\": \"" + model + "\",\n" +
        "    \"messages\": " + JSON.stringify(messages) + ",\n" +
        "    \"temperature\": " + temp + ",\n" +
        "    \"max_tokens\": " + maxTokens + ",\n" +
        "    \"stream\": " + isStream + "\n" +
        "}\n" +
        "'@\n\n" +
        "$response = Invoke-RestMethod '" + baseUrl + "/chat/completions' -Method POST -Headers $headers -Body $body\n" +
        "$response.choices[0].message.content";
    } else if (lang === "js") {
      snippet = "const response = await fetch('" + baseUrl + "/chat/completions', {\n" +
        "  method: 'POST',\n" +
        "  headers: {\n" +
        "    'Content-Type': 'application/json',\n" +
        "    'Authorization': 'Bearer " + key + "'\n" +
        "  },\n" +
        "  body: JSON.stringify({\n" +
        "    model: '" + model + "',\n" +
        "    messages: " + JSON.stringify(messages) + ",\n" +
        "    temperature: " + temp + ",\n" +
        "    max_tokens: " + maxTokens + ",\n" +
        "    stream: " + isStream + "\n" +
        "  })\n" +
        "});\n\n" +
        "const data = await response.json();\n" +
        "console.log(data.choices[0].message.content);";
    }
  } else if (modality === "image") {
    const prompt = (document.getElementById("imagePrompt")?.value || "").trim() || "A futuristic cybersecurity operations center";
    const size = document.getElementById("imageSize")?.value || "1024x1024";

    if (imageSubMode === "edit") {
      const fileName = uploadedImageFile ? uploadedImageFile.name : "reference.png";
      if (lang === "curl") {
        snippet = "curl --location '" + baseUrl + "/images/edits' \\\n" +
          "  --header 'Authorization: Bearer " + key + "' \\\n" +
          "  --form 'image=@\"" + fileName + "\" ' \\\n" +
          "  --form 'model=\"" + model + "\"' \\\n" +
          "  --form 'prompt=\"" + escapeJson(prompt) + "\"' \\\n" +
          "  --form 'size=\"" + size + "\"'";
      } else if (lang === "py") {
        snippet = "import openai\n\n" +
          "client = openai.OpenAI(\n" +
          "    base_url=\"" + baseUrl + "\",\n" +
          "    api_key=\"" + key + "\"\n" +
          ")\n\n" +
          "response = client.images.edit(\n" +
          "    model=\"" + model + "\",\n" +
          "    image=open(\"" + fileName + "\", \"rb\"),\n" +
          "    prompt=" + JSON.stringify(prompt) + ",\n" +
          "    size=\"" + size + "\"\n" +
          ")\n\n" +
          "print(response.data[0])";
      } else if (lang === "ps") {
        snippet = "$headers = @{ \"Authorization\" = \"Bearer " + key + "\" }\n" +
          "$form = @{\n" +
          "    image = Get-Item -Path \"" + fileName + "\"\n" +
          "    model = \"" + model + "\"\n" +
          "    prompt = \"" + escapeJson(prompt) + "\"\n" +
          "    size = \"" + size + "\"\n" +
          "}\n\n" +
          "$response = Invoke-RestMethod '" + baseUrl + "/images/edits' -Method POST -Headers $headers -Form $form\n" +
          "$response | ConvertTo-Json -Depth 5";
      } else if (lang === "js") {
        snippet = "const formData = new FormData();\n" +
          "formData.append('image', imageFile);\n" +
          "formData.append('model', '" + model + "');\n" +
          "formData.append('prompt', " + JSON.stringify(prompt) + ");\n" +
          "formData.append('size', '" + size + "');\n\n" +
          "const response = await fetch('" + baseUrl + "/images/edits', {\n" +
          "  method: 'POST',\n" +
          "  headers: { 'Authorization': 'Bearer " + key + "' },\n" +
          "  body: formData\n" +
          "});\n\n" +
          "const data = await response.json();\n" +
          "console.log(data.data[0]);";
      }
    } else {
      if (lang === "curl") {
        snippet = "curl --location '" + baseUrl + "/images/generations' \\\n" +
          "  --header 'Content-Type: application/json' \\\n" +
          "  --header 'Authorization: Bearer " + key + "' \\\n" +
          "  --data '{\n" +
          "    \"model\": \"" + model + "\",\n" +
          "    \"prompt\": \"" + escapeJson(prompt) + "\",\n" +
          "    \"n\": 1,\n" +
          "    \"size\": \"" + size + "\"\n" +
          "  }'";
      } else if (lang === "py") {
        snippet = "import openai\n\n" +
          "client = openai.OpenAI(\n" +
          "    base_url=\"" + baseUrl + "\",\n" +
          "    api_key=\"" + key + "\"\n" +
          ")\n\n" +
          "response = client.images.generate(\n" +
          "    model=\"" + model + "\",\n" +
          "    prompt=" + JSON.stringify(prompt) + ",\n" +
          "    n=1,\n" +
          "    size=\"" + size + "\"\n" +
          ")\n\n" +
          "print(response.data[0])";
      } else if (lang === "ps") {
        snippet = "$headers = @{\n" +
          "    \"Content-Type\"  = \"application/json\"\n" +
          "    \"Authorization\" = \"Bearer " + key + "\"\n" +
          "}\n\n" +
          "$body = @'\n" +
          "{\n" +
          "    \"model\": \"" + model + "\",\n" +
          "    \"prompt\": \"" + escapeJson(prompt) + "\",\n" +
          "    \"n\": 1,\n" +
          "    \"size\": \"" + size + "\"\n" +
          "}\n" +
          "'@\n\n" +
          "$response = Invoke-RestMethod '" + baseUrl + "/images/generations' -Method POST -Headers $headers -Body $body\n" +
          "$response | ConvertTo-Json -Depth 5";
      } else if (lang === "js") {
        snippet = "const response = await fetch('" + baseUrl + "/images/generations', {\n" +
          "  method: 'POST',\n" +
          "  headers: {\n" +
          "    'Content-Type': 'application/json',\n" +
          "    'Authorization': 'Bearer " + key + "'\n" +
          "  },\n" +
          "  body: JSON.stringify({\n" +
          "    model: '" + model + "',\n" +
          "    prompt: " + JSON.stringify(prompt) + ",\n" +
          "    n: 1,\n" +
          "    size: '" + size + "'\n" +
          "  })\n" +
          "});\n\n" +
          "const data = await response.json();\n" +
          "console.log(data.data[0]);";
      }
    }
  } else if (modality === "audio") {
    const text = (document.getElementById("audioInputText")?.value || "").trim() || "Hello world";
    const voice = document.getElementById("audioVoice")?.value || "alloy";

    if (lang === "curl") {
      snippet = "curl --location '" + baseUrl + "/audio/speech' \\\n" +
        "  --header 'Content-Type: application/json' \\\n" +
        "  --header 'Authorization: Bearer " + key + "' \\\n" +
        "  --data '{\n" +
        "    \"model\": \"" + model + "\",\n" +
        "    \"input\": \"" + escapeJson(text) + "\",\n" +
        "    \"voice\": \"" + voice + "\"\n" +
        "  }' \\\n" +
        "  --output speech.mp3";
    } else if (lang === "py") {
      snippet = "import openai\n" +
        "from pathlib import Path\n\n" +
        "client = openai.OpenAI(\n" +
        "    base_url=\"" + baseUrl + "\",\n" +
        "    api_key=\"" + key + "\"\n" +
        ")\n\n" +
        "response = client.audio.speech.create(\n" +
        "    model=\"" + model + "\",\n" +
        "    voice=\"" + voice + "\",\n" +
        "    input=" + JSON.stringify(text) + "\n" +
        ")\n\n" +
        "Path(\"speech.mp3\").write_bytes(response.content)\n" +
        "print(\"Saved speech.mp3\")";
    } else if (lang === "ps") {
      snippet = "$headers = @{\n" +
        "    \"Content-Type\"  = \"application/json\"\n" +
        "    \"Authorization\" = \"Bearer " + key + "\"\n" +
        "}\n\n" +
        "$body = @'\n" +
        "{\n" +
        "    \"model\": \"" + model + "\",\n" +
        "    \"input\": \"" + escapeJson(text) + "\",\n" +
        "    \"voice\": \"" + voice + "\"\n" +
        "}\n" +
        "'@\n\n" +
        "Invoke-RestMethod '" + baseUrl + "/audio/speech' -Method POST -Headers $headers -Body $body -OutFile speech.mp3";
    } else if (lang === "js") {
      snippet = "const response = await fetch('" + baseUrl + "/audio/speech', {\n" +
        "  method: 'POST',\n" +
        "  headers: {\n" +
        "    'Content-Type': 'application/json',\n" +
        "    'Authorization': 'Bearer " + key + "'\n" +
        "  },\n" +
        "  body: JSON.stringify({\n" +
        "    model: '" + model + "',\n" +
        "    input: " + JSON.stringify(text) + ",\n" +
        "    voice: '" + voice + "'\n" +
        "  })\n" +
        "});\n\n" +
        "const blob = await response.blob();\n" +
        "const audioUrl = URL.createObjectURL(blob);";
    }
  } else if (modality === "embed") {
    const text = (document.getElementById("embedInputText")?.value || "").trim() || "Hello world";

    if (lang === "curl") {
      snippet = "curl --location '" + baseUrl + "/embeddings' \\\n" +
        "  --header 'Content-Type: application/json' \\\n" +
        "  --header 'Authorization: Bearer " + key + "' \\\n" +
        "  --data '{\n" +
        "    \"model\": \"" + model + "\",\n" +
        "    \"input\": [\"" + escapeJson(text) + "\"]\n" +
        "  }'";
    } else if (lang === "py") {
      snippet = "import openai\n\n" +
        "client = openai.OpenAI(\n" +
        "    base_url=\"" + baseUrl + "\",\n" +
        "    api_key=\"" + key + "\"\n" +
        ")\n\n" +
        "response = client.embeddings.create(\n" +
        "    model=\"" + model + "\",\n" +
        "    input=[" + JSON.stringify(text) + "]\n" +
        ")\n\n" +
        "print(response.data[0].embedding[:5])";
    } else if (lang === "ps") {
      snippet = "$headers = @{\n" +
        "    \"Content-Type\"  = \"application/json\"\n" +
        "    \"Authorization\" = \"Bearer " + key + "\"\n" +
        "}\n\n" +
        "$body = @'\n" +
        "{\n" +
        "    \"model\": \"" + model + "\",\n" +
        "    \"input\": [\"" + escapeJson(text) + "\"]\n" +
        "}\n" +
        "'@\n\n" +
        "$response = Invoke-RestMethod '" + baseUrl + "/embeddings' -Method POST -Headers $headers -Body $body\n" +
        "$response.data[0].embedding[0..4]";
    } else if (lang === "js") {
      snippet = "const response = await fetch('" + baseUrl + "/embeddings', {\n" +
        "  method: 'POST',\n" +
        "  headers: {\n" +
        "    'Content-Type': 'application/json',\n" +
        "    'Authorization': 'Bearer " + key + "'\n" +
        "  },\n" +
        "  body: JSON.stringify({\n" +
        "    model: '" + model + "',\n" +
        "    input: [" + JSON.stringify(text) + "]\n" +
        "  })\n" +
        "});\n\n" +
        "const data = await response.json();\n" +
        "console.log(data.data[0].embedding);";
    }
  }

  codeEl.textContent = snippet;
}

// ── Unified Execution Handler ──────────────────────────────────────────────
async function executeCurrentWorkbench() {
  const key = getKey();
  if (!key) {
    alert("Please enter your Bearer API Key first.");
    document.getElementById("apiKey")?.focus();
    return;
  }

  const modality = activeWorkbenchModality;
  const btn = document.getElementById("btnExecuteUnified");
  const origHtml = btn.innerHTML;
  btn.disabled = true;
  btn.innerHTML = '<span class="pulse-indicator"></span> Running...';

  const wrap = document.getElementById("unifiedResponseWrap");
  wrap.style.display = "block";
  document.getElementById("wbFormattedOutput").style.display = "none";
  document.getElementById("wbFormattedOutput").textContent = "";
  document.getElementById("wbFormattedOutput").classList.remove("streaming-cursor");
  document.getElementById("wbImagePreviewBox").style.display = "none";
  document.getElementById("wbAudioPlayerBox").style.display = "none";
  document.getElementById("wbVectorStatsRow").style.display = "none";
  document.getElementById("wbMediaDownloadBtn").style.display = "none";
  document.getElementById("wbRawWrap").style.display = "none";

  const badge = document.getElementById("wbRespStatusBadge");
  badge.className = "resp-badge ok";
  badge.textContent = "Processing...";
  document.getElementById("wbRespMeta").textContent = "";

  wrap.scrollIntoView({ behavior: "smooth", block: "nearest" });

  const t0 = performance.now();

  try {
    if (modality === "chat") {
      await executeChatRequest(key, t0);
    } else if (modality === "image") {
      await executeImageRequest(key, t0);
    } else if (modality === "audio") {
      await executeAudioRequest(key, t0);
    } else if (modality === "embed") {
      await executeEmbedRequest(key, t0);
    }
  } catch (err) {
    badge.className = "resp-badge err";
    badge.textContent = "Error";
    const out = document.getElementById("wbFormattedOutput");
    out.style.display = "block";
    out.textContent = "Request Failed: " + err.message;
  } finally {
    btn.disabled = false;
    btn.innerHTML = origHtml;
  }
}

// ── Modality Specific Request Handlers ─────────────────────────────────────
async function executeChatRequest(key, t0) {
  const model = selectedModels.chat;
  const sysPrompt = (document.getElementById("chatSystemPrompt")?.value || "").trim();
  const userMsg = (document.getElementById("chatUserMessage")?.value || "").trim() || "Hello!";
  const temp = parseFloat(document.getElementById("chatTemperature")?.value || "0.7");
  const maxTokens = parseInt(document.getElementById("chatMaxTokens")?.value || "1000", 10);
  const isStream = document.getElementById("chatStreamToggle") ? document.getElementById("chatStreamToggle").checked : true;

  const messages = [];
  if (sysPrompt) messages.push({ role: "system", content: sysPrompt });
  messages.push({ role: "user", content: userMsg });

  const outEl = document.getElementById("wbFormattedOutput");
  outEl.style.display = "block";

  const badge = document.getElementById("wbRespStatusBadge");
  const meta = document.getElementById("wbRespMeta");
  const rawOut = document.getElementById("wbRawResponse");

  const res = await fetch(getBaseUrl() + "/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + key
    },
    body: JSON.stringify({
      model,
      messages,
      temperature: temp,
      max_tokens: maxTokens,
      stream: isStream
    })
  });

  badge.className = "resp-badge " + (res.ok ? "ok" : "err");
  badge.textContent = "HTTP " + res.status;

  if (!res.ok) {
    const errText = await res.text();
    outEl.textContent = errText;
    rawOut.textContent = errText;
    meta.textContent = (((performance.now() - t0) / 1000).toFixed(2)) + "s";
    return;
  }

  if (isStream && res.body) {
    outEl.classList.add("streaming-cursor");
    const reader = res.body.getReader();
    const decoder = new TextDecoder("utf-8");
    let accumulatedText = "";
    let rawChunks = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value, { stream: true });
      rawChunks += chunk;

      const lines = chunk.split("\n");
      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || !trimmed.startsWith("data:")) continue;
        const jsonStr = trimmed.replace(/^data:\s*/, "");
        if (jsonStr === "[DONE]") continue;

        try {
          const parsed = JSON.parse(jsonStr);
          const delta = parsed.choices?.[0]?.delta?.content;
          if (delta) {
            accumulatedText += delta;
            outEl.textContent = accumulatedText;
          }
        } catch (e) {
        }
      }
    }

    outEl.classList.remove("streaming-cursor");
    rawOut.textContent = rawChunks;
    const elapsed = ((performance.now() - t0) / 1000).toFixed(2);
    meta.textContent = elapsed + "s · Streaming SSE Completed";
  } else {
    const data = await res.json();
    const elapsed = ((performance.now() - t0) / 1000).toFixed(2);
    const usage = data?.usage;
    meta.textContent = elapsed + "s" + (usage ? " · " + (usage.total_tokens || 0) + " tokens" : "");

    if (data?.choices?.[0]?.message?.content != null) {
      outEl.textContent = data.choices[0].message.content;
    } else {
      outEl.textContent = data.error?.message || JSON.stringify(data, null, 2);
    }
    rawOut.textContent = JSON.stringify(data, null, 2);
  }
}

async function executeImageRequest(key, t0) {
  const model = selectedModels.image;
  const prompt = (document.getElementById("imagePrompt")?.value || "").trim() || "A futuristic cybersecurity operations center";
  const size = document.getElementById("imageSize")?.value || "1024x1024";

  let res;
  if (imageSubMode === "edit" && uploadedImageFile) {
    const formData = new FormData();
    formData.append("image", uploadedImageFile);
    formData.append("model", model);
    formData.append("prompt", prompt);
    formData.append("size", size);

    res = await fetch(getBaseUrl() + "/images/edits", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + key
      },
      body: formData
    });
  } else {
    res = await fetch(getBaseUrl() + "/images/generations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + key
      },
      body: JSON.stringify({
        model,
        prompt,
        n: 1,
        size
      })
    });
  }

  const elapsed = ((performance.now() - t0) / 1000).toFixed(2);
  const data = await res.json();

  const badge = document.getElementById("wbRespStatusBadge");
  badge.className = "resp-badge " + (res.ok ? "ok" : "err");
  badge.textContent = res.ok ? (imageSubMode === "edit" ? "Image Edited" : "Image Generated") : ("HTTP " + res.status);
  document.getElementById("wbRespMeta").textContent = elapsed + "s";

  const previewBox = document.getElementById("wbImagePreviewBox");
  previewBox.style.display = "flex";
  const downloadBtn = document.getElementById("wbMediaDownloadBtn");
  const rawOut = document.getElementById("wbRawResponse");
  rawOut.textContent = JSON.stringify(data, null, 2);

  let imgUrl = "";
  if (data?.data?.[0]?.url) {
    imgUrl = data.data[0].url;
  } else if (data?.data?.[0]?.b64_json) {
    imgUrl = "data:image/png;base64," + data.data[0].b64_json;
  }

  if (imgUrl) {
    previewBox.innerHTML = '<img src="' + imgUrl + '" alt="Generated image" onclick="window.open(this.src, \'_blank\')" style="cursor:zoom-in;" title="Click to open in new tab" />';
    downloadBtn.style.display = "inline-flex";
    downloadBtn.href = imgUrl;
    downloadBtn.download = (imageSubMode === "edit" ? "edited-image.png" : "generated-image.png");
  } else {
    previewBox.innerHTML = '<div style="color:var(--accent-red);padding:20px;">' + (data.error?.message || "Failed to generate image.") + '</div>';
    downloadBtn.style.display = "none";
  }
}

async function executeAudioRequest(key, t0) {
  const model = selectedModels.audio;
  const text = (document.getElementById("audioInputText")?.value || "").trim() || "Hello world";
  const voice = document.getElementById("audioVoice")?.value || "alloy";

  const res = await fetch(getBaseUrl() + "/audio/speech", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + key
    },
    body: JSON.stringify({
      model,
      input: text,
      voice
    })
  });

  const elapsed = ((performance.now() - t0) / 1000).toFixed(2);
  const badge = document.getElementById("wbRespStatusBadge");
  badge.className = "resp-badge " + (res.ok ? "ok" : "err");
  badge.textContent = res.ok ? "Audio Synthesized" : ("HTTP " + res.status);
  document.getElementById("wbRespMeta").textContent = elapsed + "s · Voice: " + voice;

  const playerBox = document.getElementById("wbAudioPlayerBox");
  playerBox.style.display = "flex";
  const downloadLink = document.getElementById("wbMediaDownloadBtn");
  const rawOut = document.getElementById("wbRawResponse");

  if (res.ok) {
    const blob = await res.blob();
    const audioUrl = URL.createObjectURL(blob);
    playerBox.innerHTML = '<audio controls autoplay src="' + audioUrl + '"></audio>';
    downloadLink.style.display = "inline-flex";
    downloadLink.href = audioUrl;
    downloadLink.download = "speech.mp3";
    rawOut.textContent = "Audio stream received: " + (blob.size / 1024).toFixed(1) + " KB (audio/mpeg)";
  } else {
    const errJson = await res.json();
    playerBox.innerHTML = '<div style="color:var(--accent-red);padding:20px;">' + (errJson.error?.message || "TTS Request failed") + '</div>';
    downloadLink.style.display = "none";
    rawOut.textContent = JSON.stringify(errJson, null, 2);
  }
}

async function executeEmbedRequest(key, t0) {
  const model = selectedModels.embed;
  const text = (document.getElementById("embedInputText")?.value || "").trim() || "Hello world";

  const res = await fetch(getBaseUrl() + "/embeddings", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + key
    },
    body: JSON.stringify({
      model,
      input: [text]
    })
  });

  const elapsed = ((performance.now() - t0) / 1000).toFixed(2);
  const data = await res.json();

  const badge = document.getElementById("wbRespStatusBadge");
  badge.className = "resp-badge " + (res.ok ? "ok" : "err");
  badge.textContent = res.ok ? "Vector Calculated" : ("HTTP " + res.status);
  document.getElementById("wbRespMeta").textContent = elapsed + "s";

  const statsRow = document.getElementById("wbVectorStatsRow");
  const out = document.getElementById("wbFormattedOutput");
  const rawOut = document.getElementById("wbRawResponse");

  rawOut.textContent = JSON.stringify(data, null, 2);

  if (res.ok && data?.data?.[0]?.embedding) {
    const vec = data.data[0].embedding;
    statsRow.style.display = "flex";
    statsRow.innerHTML = '<span><strong>Vector Dimensions:</strong> ' + vec.length + '</span><span><strong>Tokens Processed:</strong> ' + (data.usage?.total_tokens || "N/A") + '</span>';
    out.style.display = "block";
    out.textContent = 'First 8 dimensions: [' + vec.slice(0, 8).map(v => v.toFixed(6)).join(", ") + ' ... (' + (vec.length - 8) + ' more dimensions)]';
  } else {
    statsRow.style.display = "none";
    out.style.display = "block";
    out.textContent = data.error?.message || "Failed to calculate embedding.";
  }
}

// ── Fetch Live Models from /models ─────────────────────────────────────────
async function fetchModels(isAuto = false) {
  const key = getKey();
  if (!key) {
    setStatus("Please enter your Bearer API Key to fetch live models.", "error");
    document.getElementById("apiKey")?.focus();
    return;
  }

  const rawBaseUrl = getBaseUrl();
  setStoredValue("v1_base_url", rawBaseUrl);
  setStoredValue("v1_api_key", key);

  const btn = document.getElementById("fetchBtn");
  if (btn) btn.disabled = true;
  setStatus(isAuto ? "Auto-syncing models from saved credentials..." : "Querying gateway models endpoint...", "loading");

  try {
    let res = null;

    // 1. Try /model/info (LiteLLM / RDSEC Gateway detailed replicas)
    try {
      res = await fetch(rawBaseUrl + "/model/info", {
        headers: { "Authorization": "Bearer " + key }
      });
    } catch (e) {}

    // 2. If /model/info not available or failed, try standard /models
    if (!res || !res.ok) {
      try {
        res = await fetch(rawBaseUrl + "/models", {
          headers: { "Authorization": "Bearer " + key }
        });
      } catch (e) {}
    }

    // 3. Fallback: try alternate /v1/models if base URL didn't have /v1
    if (!res || !res.ok) {
      const altBase = rawBaseUrl.endsWith("/v1") ? rawBaseUrl.slice(0, -3) : rawBaseUrl + "/v1";
      try {
        res = await fetch(altBase + "/models", {
          headers: { "Authorization": "Bearer " + key }
        });
        if (res && res.ok) {
          const baseInput = document.getElementById("baseUrl");
          if (baseInput && altBase.endsWith("/v1")) {
            baseInput.value = altBase;
            setStoredValue("v1_base_url", altBase);
          }
        }
      } catch (e) {}
    }

    if (!res || !res.ok) {
      setStatus("Failed to fetch models: HTTP " + (res ? res.status + " " + res.statusText : "Network / Endpoint Error"), "error");
      return;
    }

    const data = await res.json();
    const list = Array.isArray(data) ? data : Array.isArray(data.data) ? data.data : [];

    if (!list.length) {
      setStatus("No models returned from gateway.", "error");
      return;
    }

    // Calculate dynamic health map across all deployment items
    const healthMap = {};
    for (const item of list) {
      const id = item.id || item.model_name || String(item);
      if (!healthMap[id]) healthMap[id] = { total: 0, online: 0 };
      healthMap[id].total += 1;
      const isOnline = item.model_info?.page_display_data?.enabled !== false;
      if (isOnline) healthMap[id].online += 1;
    }

    currentModelMap.clear();
    for (const item of list) {
      const id = item.id || item.model_name || String(item);
      const cleanId = id.includes('/') ? id.split('/').slice(1).join('/') : id;
      const existing = MODEL_CATALOG[id] || MODEL_CATALOG[cleanId] || {};
      
      let releaseDate = existing.releaseDate;
      if (!releaseDate && item.created && typeof item.created === "number") {
        try {
          const d = new Date(item.created * 1000);
          if (!isNaN(d.getTime()) && d.getFullYear() > 2000) {
            releaseDate = d.toISOString().slice(0, 7);
          }
        } catch (e) {}
      }
      if (!releaseDate) {
        releaseDate = extractReleaseDate(id, { model_info: item });
      }
      
      const defaultTotal = existing.health?.total || 1;
      const computedTotal = Math.max(healthMap[id]?.total || 1, defaultTotal);
      let computedOnline = healthMap[id]?.online != null ? healthMap[id].online : computedTotal;
      if (existing.health?.online != null) {
        computedOnline = Math.min(computedOnline, existing.health.online);
      }
      const dynamicHealth = { total: computedTotal, online: computedOnline };

      currentModelMap.set(id, {
        id,
        ...existing,
        mode: item.mode || existing.mode || (getModality(id, existing) === "chat" ? "chat" : getModality(id, existing)),
        releaseDate,
        health: dynamicHealth,
        maxTokens: existing.maxTokens || (item.max_tokens ? formatTokenCount(item.max_tokens) : null),
        maxInputTokens: item.max_input_tokens || existing.maxInputTokens,
        maxOutputTokens: item.max_output_tokens || existing.maxOutputTokens
      });
    }

    renderAllModalityGrids();
    updateHeaderCount();
    setStatus("Successfully synced " + list.length + " live models from gateway.", "ready");
    if (!isAuto) showToast("Synced " + list.length + " models");
  } catch (err) {
    setStatus("Error fetching models: " + err.message, "error");
  } finally {
    if (btn) btn.disabled = false;
  }
}

function setStatus(msg, state) {
  const msgEl = document.getElementById("statusMsg");
  const dotEl = document.getElementById("statusDot");
  if (msgEl) msgEl.textContent = msg;
  if (dotEl) {
    dotEl.className = "status-dot " + (state || "ready");
  }
}

// ── Modal Details Handler ──────────────────────────────────────────────────
function openModelModal(id, meta, vendor, modality) {
  currentModalModel = { id, meta, vendor, modality };

  const tagEl = document.getElementById("modalVendorTag");
  if (tagEl) {
    tagEl.textContent = vendor?.label || "Provider";
    tagEl.style.background = vendor?.bg || "rgba(235, 33, 46, 0.15)";
    tagEl.style.color = vendor?.color || "#ff6b75";
    tagEl.style.border = "1px solid " + (vendor?.color ? vendor.color + "55" : "rgba(235, 33, 46, 0.35)");
  }
  document.getElementById("modalModelName").textContent = id;

  const inPrice = meta?.inCost != null ? ("$" + meta.inCost + " / 1M") : "Included";
  const outPrice = meta?.outCost != null ? ("$" + meta.outCost + " / 1M") : "Included";
  const totalCtx = meta?.maxTokens || (meta?.maxInputTokens ? formatTokenCount(meta.maxInputTokens) : "Default");
  const maxIn = meta?.maxInputTokens ? (meta.maxInputTokens.toLocaleString() + " (" + formatTokenCount(meta.maxInputTokens) + ")") : "Included in context";
  const maxOut = meta?.maxOutputTokens ? (meta.maxOutputTokens.toLocaleString() + " (" + formatTokenCount(meta.maxOutputTokens) + ")") : "Standard completion";
  const baseProvider = meta?.provider || meta?.litellm_provider || vendor?.label || "Gateway Route";
  const health = meta?.health || { total: 1, online: 1 };
  const totalServers = Math.max(health.total || 1, 1);
  const onlineServers = health.online != null ? health.online : totalServers;
  const isAllOnline = onlineServers === totalServers && totalServers > 0;
  const isAllOffline = onlineServers === 0;
  const healthColor = isAllOnline ? "#4ade80" : isAllOffline ? "#f87171" : "#facc15";
  const providerHtml = baseProvider + ' <span style="color:' + healthColor + '; font-weight:700;">(' + onlineServers + '/' + totalServers + ' online)</span>';

  document.getElementById("modalInPrice").textContent = inPrice;
  document.getElementById("modalOutPrice").textContent = outPrice;
  document.getElementById("modalContext").textContent = totalCtx;
  document.getElementById("modalMaxInput").textContent = maxIn;
  document.getElementById("modalMaxOutput").textContent = maxOut;
  document.getElementById("modalProvider").innerHTML = providerHtml;

  const descEl = document.getElementById("modalDescription");
  if (descEl) {
    let descText = meta?.desc || ("Model " + id + " available via v1 AI Gateway.");
    if (meta?.releaseDate && !descText.toLowerCase().includes("release date")) {
      descText = "Release Date: " + meta.releaseDate + "\n\n" + descText;
    }
    descEl.textContent = descText;
  }

  document.getElementById("modelDetailModal").classList.add("open");
}

function closeModelModal(e) {
  if (e && e.target !== document.getElementById("modelDetailModal") && !e.target.classList.contains("modal-close-btn")) return;
  document.getElementById("modelDetailModal").classList.remove("open");
}

function copyModalModelName() {
  if (!currentModalModel) return;
  navigator.clipboard.writeText(currentModalModel.id).then(() => {
    showToast("Copied model ID to clipboard");
  });
}

function applyModalSelection() {
  if (!currentModalModel) return;
  onModelClicked(currentModalModel.modality, currentModalModel.id);
  closeModelModal();
}

// ── Helpers ────────────────────────────────────────────────────────────────
function toggleKeyVisibility() {
  const keyInput = document.getElementById("apiKey");
  if (!keyInput) return;
  keyInput.type = keyInput.type === "password" ? "text" : "password";
}

function toggleUnifiedRawJson() {
  const rawWrap = document.getElementById("wbRawWrap");
  if (rawWrap) {
    rawWrap.style.display = rawWrap.style.display === "none" ? "block" : "none";
  }
}

function copySnippet(elementId, btn) {
  const el = document.getElementById(elementId);
  if (!el) return;
  const text = el.textContent;
  navigator.clipboard.writeText(text).then(() => {
    const orig = btn.textContent;
    btn.textContent = "Copied!";
    btn.classList.add("copied");
    setTimeout(() => {
      btn.textContent = orig;
      btn.classList.remove("copied");
    }, 1500);
  });
}

function showToast(msg) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

// ── Event Listeners ────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  initApp();

  const baseUrlInput = document.getElementById("baseUrl");
  const apiKeyInput = document.getElementById("apiKey");

  if (baseUrlInput) {
    baseUrlInput.addEventListener("input", (e) => {
      setStoredValue("v1_base_url", e.target.value.trim());
      updateWorkbenchSnippet();
    });
    baseUrlInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        fetchModels(false);
      }
    });
  }

  if (apiKeyInput) {
    apiKeyInput.addEventListener("input", (e) => {
      setStoredValue("v1_api_key", e.target.value.trim());
      updateWorkbenchSnippet();
    });

    apiKeyInput.addEventListener("paste", () => {
      setTimeout(() => {
        const val = apiKeyInput.value.trim();
        if (val) {
          setStoredValue("v1_api_key", val);
          updateWorkbenchSnippet();
          showToast("API key pasted! Auto-syncing models...");
          fetchModels(false);
        }
      }, 50);
    });

    apiKeyInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        fetchModels(false);
      }
    });
  }

  ["chatSystemPrompt", "chatUserMessage", "imagePrompt", "audioInputText", "embedInputText"].forEach(id => {
    document.getElementById(id)?.addEventListener("input", updateWorkbenchSnippet);
  });

  const dropzone = document.getElementById("imageDropzone");
  if (dropzone) {
    ["dragenter", "dragover"].forEach(eventName => {
      dropzone.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropzone.style.borderColor = "var(--accent-red)";
      });
    });
    ["dragleave", "drop"].forEach(eventName => {
      dropzone.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropzone.style.borderColor = "";
      });
    });
    dropzone.addEventListener("drop", (e) => {
      const files = e.dataTransfer?.files;
      if (files && files.length > 0) {
        handleImageFileUpload({ target: { files: files } });
      }
    });
  }
});
