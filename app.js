const $ = (s) => document.querySelector(s),
  $$ = (s) => [...document.querySelectorAll(s)];
const providers = {
  silicon: {
    name: "硅基流动",
    endpoint: "https://api.siliconflow.cn/v1/chat/completions",
    modelsEndpoint: "https://api.siliconflow.cn/v1/models",
    types: ["text", "image", "video"],
    models: ["填写 Key 后点击 ↻"],
  },
  lingke: {
    name: "灵客 AI",
    endpoint: "https://api.lingkeai.ai/v1/chat/completions",
    modelsEndpoint: "https://api.lingkeai.ai/v1/models",
    types: ["text"],
    models: ["填写 Key 后点击 ↻"],
  },
  deepseek: {
    name: "DeepSeek",
    endpoint: "https://api.deepseek.com/chat/completions",
    modelsEndpoint: "https://api.deepseek.com/models",
    types: ["text"],
    models: ["deepseek-chat", "deepseek-reasoner"],
  },
  openai: {
    name: "OpenAI",
    endpoint: "https://api.openai.com/v1/chat/completions",
    modelsEndpoint: "https://api.openai.com/v1/models",
    types: ["text", "image"],
    models: ["gpt-5-mini", "gpt-4.1-mini", "gpt-image-1"],
  },
  openrouter: {
    name: "OpenRouter",
    endpoint: "https://openrouter.ai/api/v1/chat/completions",
    modelsEndpoint: "https://openrouter.ai/api/v1/models",
    types: ["text"],
    models: ["填写 Key 后点击 ↻"],
  },
  google: {
    name: "Google Gemini",
    endpoint:
      "https://generativelanguage.googleapis.com/v1beta/openai/chat/completions",
    modelsEndpoint:
      "https://generativelanguage.googleapis.com/v1beta/openai/models",
    types: ["text"],
    models: ["填写 Key 后点击 ↻"],
  },
  anthropic: {
    name: "Anthropic Claude（兼容网关）",
    endpoint: "",
    types: ["text"],
    models: ["claude-sonnet-4-5", "claude-opus-4-1"],
  },
  xai: {
    name: "xAI Grok",
    endpoint: "https://api.x.ai/v1/chat/completions",
    modelsEndpoint: "https://api.x.ai/v1/models",
    types: ["text"],
    models: ["填写 Key 后点击 ↻"],
  },
  groq: {
    name: "Groq",
    endpoint: "https://api.groq.com/openai/v1/chat/completions",
    modelsEndpoint: "https://api.groq.com/openai/v1/models",
    types: ["text"],
    models: ["填写 Key 后点击 ↻"],
  },
  together: {
    name: "Together AI",
    endpoint: "https://api.together.xyz/v1/chat/completions",
    modelsEndpoint: "https://api.together.xyz/v1/models",
    types: ["text"],
    models: ["填写 Key 后点击 ↻"],
  },
  mistral: {
    name: "Mistral AI",
    endpoint: "https://api.mistral.ai/v1/chat/completions",
    modelsEndpoint: "https://api.mistral.ai/v1/models",
    types: ["text"],
    models: ["填写 Key 后点击 ↻"],
  },
  perplexity: {
    name: "Perplexity",
    endpoint: "https://api.perplexity.ai/chat/completions",
    types: ["text"],
    models: ["sonar", "sonar-pro"],
  },
  moonshot: {
    name: "Moonshot / Kimi",
    endpoint: "https://api.moonshot.cn/v1/chat/completions",
    modelsEndpoint: "https://api.moonshot.cn/v1/models",
    types: ["text"],
    models: ["填写 Key 后点击 ↻"],
  },
  zhipu: {
    name: "智谱 BigModel",
    endpoint: "https://open.bigmodel.cn/api/paas/v4/chat/completions",
    modelsEndpoint: "https://open.bigmodel.cn/api/paas/v4/models",
    types: ["text"],
    models: ["填写 Key 后点击 ↻"],
  },
  dashscope: {
    name: "阿里云百炼 / 通义",
    endpoint:
      "https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions",
    modelsEndpoint: "https://dashscope.aliyuncs.com/compatible-mode/v1/models",
    types: ["text"],
    models: ["填写 Key 后点击 ↻"],
  },
  ark: {
    name: "火山引擎方舟 / 豆包",
    endpoint: "https://ark.cn-beijing.volces.com/api/v3/chat/completions",
    modelsEndpoint: "https://ark.cn-beijing.volces.com/api/v3/models",
    types: ["text"],
    models: ["填写 Key 后点击 ↻"],
  },
  minimax: {
    name: "MiniMax",
    endpoint: "https://api.minimax.chat/v1/text/chatcompletion_v2",
    types: ["text"],
    models: ["MiniMax-M2.5"],
  },
  stepfun: {
    name: "阶跃星辰 StepFun",
    endpoint: "https://api.stepfun.com/v1/chat/completions",
    modelsEndpoint: "https://api.stepfun.com/v1/models",
    types: ["text"],
    models: ["填写 Key 后点击 ↻"],
  },
  baichuan: {
    name: "百川智能",
    endpoint: "https://api.baichuan-ai.com/v1/chat/completions",
    types: ["text"],
    models: ["Baichuan4"],
  },
  yi: {
    name: "零一万物 Yi",
    endpoint: "https://api.lingyiwanwu.com/v1/chat/completions",
    modelsEndpoint: "https://api.lingyiwanwu.com/v1/models",
    types: ["text"],
    models: ["填写 Key 后点击 ↻"],
  },
  custom: {
    name: "自定义 OpenAI 兼容 API",
    endpoint: "",
    types: ["text", "image"],
    models: ["custom-model"],
  },
};
const defaultModels = {
  silicon: {
    text: [
      "ByteDance-Seed/Seed-OSS-36B-Instruct",
      "deepseek-ai/DeepSeek-OCR",
      "deepseek-ai/DeepSeek-R1",
      "deepseek-ai/DeepSeek-R1-0528-Qwen3-8B",
      "deepseek-ai/DeepSeek-V3",
      "deepseek-ai/DeepSeek-V3.1-Terminus",
      "deepseek-ai/DeepSeek-V3.2",
      "deepseek-ai/DeepSeek-V4-Flash",
      "deepseek-ai/DeepSeek-V4-Pro",
      "inclusionAI/Ling-flash-2.0",
      "inclusionAI/Ling-mini-2.0",
      "meituan-longcat/LongCat-2.0",
      "MiniMaxAI/MiniMax-M2.5",
      "moonshotai/Kimi-K2.7-Code",
      "nex-agi/Nex-N2-Pro",
      "PaddlePaddle/PaddleOCR-VL-1.5",
      "Pro/deepseek-ai/DeepSeek-R1",
      "Pro/deepseek-ai/DeepSeek-V3",
      "Pro/deepseek-ai/DeepSeek-V3.1-Terminus",
      "Pro/deepseek-ai/DeepSeek-V3.2",
      "Pro/MiniMaxAI/MiniMax-M2.5",
      "Pro/moonshotai/Kimi-K2.6",
      "Pro/Qwen/Qwen2.5-7B-Instruct",
      "Pro/zai-org/GLM-5.1",
      "Qwen/Qwen2.5-14B-Instruct",
      "Qwen/Qwen2.5-32B-Instruct",
      "Qwen/Qwen2.5-72B-Instruct",
      "Qwen/Qwen2.5-72B-Instruct-128K",
      "Qwen/Qwen2.5-7B-Instruct",
      "Qwen/Qwen3.5-122B-A10B",
      "Qwen/Qwen3.5-27B",
      "Qwen/Qwen3.5-35B-A3B",
      "Qwen/Qwen3.5-397B-A17B",
      "Qwen/Qwen3.5-4B",
      "Qwen/Qwen3.5-9B",
      "Qwen/Qwen3.6-27B",
      "Qwen/Qwen3.6-35B-A3B",
      "Qwen/Qwen3-14B",
      "Qwen/Qwen3-30B-A3B-Instruct-2507",
      "Qwen/Qwen3-32B",
      "Qwen/Qwen3-8B",
      "Qwen/Qwen3-Coder-30B-A3B-Instruct",
      "Qwen/Qwen3-Omni-30B-A3B-Captioner",
      "Qwen/Qwen3-Omni-30B-A3B-Instruct",
      "Qwen/Qwen3-Omni-30B-A3B-Thinking",
      "Qwen/Qwen3-VL-30B-A3B-Instruct",
      "Qwen/Qwen3-VL-30B-A3B-Thinking",
      "Qwen/Qwen3-VL-32B-Instruct",
      "Qwen/Qwen3-VL-32B-Thinking",
      "Qwen/Qwen3-VL-8B-Instruct",
      "Qwen/Qwen3-VL-8B-Thinking",
      "stepfun-ai/Step-3.5-Flash",
      "tencent/Hunyuan-A13B-Instruct",
      "tencent/Hunyuan-MT-7B",
      "THUDM/GLM-4-32B-0414",
      "THUDM/GLM-4-9B-0414",
      "THUDM/GLM-Z1-9B-0414",
      "zai-org/GLM-4.5-Air",
      "zai-org/GLM-4.5V",
      "zai-org/GLM-5.2",
    ],
    image: [
      "Kwai-Kolors/Kolors",
      "baidu/ERNIE-Image-Turbo",
      "Qwen/Qwen-Image",
      "Qwen/Qwen-Image-Edit",
      "Qwen/Qwen-Image-Edit-2509",
      "Tongyi-MAI/Z-Image",
      "Tongyi-MAI/Z-Image-Turbo",
    ],
    video: ["Wan-AI/Wan2.2-I2V-A14B", "Wan-AI/Wan2.2-T2V-A14B"],
  },
  deepseek: { text: ["deepseek-chat", "deepseek-reasoner"] },
  openai: { text: ["gpt-5-mini", "gpt-4.1-mini"], image: ["gpt-image-1"] },
  lingke: { text: ["填写 Key 后点击 ↻ 读取灵客模型"] },
  custom: {
    text: ["custom-model"],
    image: ["custom-model"],
    video: ["custom-model"],
  },
};
const modelsFor = (provider, type) => {
  if (type === "check") type = "text";
  if (type === "txt" || type === "output") return [];
  try {
    const cached = JSON.parse(
      sessionStorage.getItem("models_v2_" + provider + "_" + type) || "null",
    );
    if (Array.isArray(cached) && cached.length) return cached;
  } catch {}
  return [
    ...(defaultModels[provider]?.[type] ||
      providers[provider]?.models || ["填写 Key 后点击 ↻"]),
  ];
};
const nodeModality = (type) => (type === "check" ? "text" : type);
const providersFor = (type) => {
  const modality = nodeModality(type);
  return Object.entries(providers).filter(([, p]) =>
    p.types?.includes(modality),
  );
};
const types = [
  ["txt", "TXT 文本", "本地输入想法、剧本或任意文字"],
  ["text", "AI 文本 / 剧本", "调用大模型生成剧本、提示词、分镜JSON"],
  ["image", "图片生成", "人物、场景、分镜首帧"],
  ["video", "视频生成", "文生视频或图生视频"],
  ["check", "一致性检查", "人物、场景与道具质检"],
  ["output", "素材与成片", "整理输出和下载"],
];
const emptyState = () => ({
  version: 7,
  nodes: [],
  links: [],
  assets: [],
  selected: null,
  selectedLink: null,
  connecting: null,
  zoom: 1,
  project: {
    name: "未命名视频项目",
    idea: "",
    episodes: 1,
    duration: "3分钟",
    type: "短剧",
    ratio: "16:9 横屏",
    visualStyle: "",
  },
});
const legacyState = JSON.parse(localStorage.getItem("cheng_v6") || "null");
let workspace = JSON.parse(
  localStorage.getItem("cheng_workspace_v1") || "null",
) || {
  activeId: "canvas-1",
  canvases: [
    { id: "canvas-1", name: "画布 1", state: legacyState || emptyState() },
  ],
};
let state =
  workspace.canvases.find((c) => c.id === workspace.activeId)?.state ||
  workspace.canvases[0].state;
state.selectedLink = null;
state.nodes.forEach((n, i) => {
  if (!n.seq) n.seq = i + 1;
});
const canvas = $("#canvas"),
  wires = $("#wires"),
  wrap = $("#canvasWrap");
const apiEndpoint = (n) =>
  n?.provider === "silicon" && n?.type === "image"
    ? "https://api.siliconflow.cn/v1/images/generations"
    : n?.provider === "openai" && n?.type === "image"
      ? "https://api.openai.com/v1/images/generations"
      : n?.provider === "silicon" && n?.type === "video"
        ? "https://api.siliconflow.cn/v1/video/submit"
        : providers[n?.provider]?.endpoint || n?.endpoint || "";
const seqText = (n) =>
  String(n.seq || state.nodes.indexOf(n) + 1).padStart(2, "0");
function toast(t) {
  const e = $("#toast");
  e.textContent = t;
  e.classList.add("on");
  setTimeout(() => e.classList.remove("on"), 1800);
}
function save() {
  state.project = {
    name: $("#projectName").value,
    idea: $("#idea").value,
    episodes: $("#episodes").value,
    duration: $("#duration").value,
    type: $("#projectType").value,
    ratio: $("#ratio").value,
    visualStyle: $("#visualStyle").value,
  };
  const active = workspace.canvases.find((c) => c.id === workspace.activeId);
  if (active) active.state = state;
  localStorage.setItem("cheng_workspace_v1", JSON.stringify(workspace));
  localStorage.setItem("cheng_v6", JSON.stringify(state));
  $("#status").textContent = "V7.5 · 已保存";
}
function fillProjectForm() {
  const p = state.project || emptyState().project;
  $("#projectName").value = p.name || "未命名视频项目";
  $("#idea").value = p.idea || "";
  $("#episodes").value = p.episodes || 1;
  $("#duration").value = p.duration || "3分钟";
  $("#projectType").value = p.type || "短剧";
  $("#ratio").value = p.ratio || "16:9 横屏";
  $("#visualStyle").value = p.visualStyle || "";
}
function renderCanvasSelect() {
  const select = $("#canvasSelect");
  select.innerHTML = workspace.canvases
    .map(
      (c) =>
        `<option value="${esc(c.id)}" ${c.id === workspace.activeId ? "selected" : ""}>${esc(c.name)}</option>`,
    )
    .join("");
}
function switchCanvas(id) {
  save();
  const target = workspace.canvases.find((c) => c.id === id);
  if (!target) return;
  workspace.activeId = id;
  state = target.state;
  state.selectedLink = null;
  fillProjectForm();
  renderCanvasSelect();
  render();
  renderAssets();
  save();
  toast(`已切换到 ${target.name}`);
}
function esc(v = "") {
  return String(v).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
}
function addNode(type) {
  const meta = types.find((x) => x[0] === type) || types[0],
    id = "n" + Date.now(),
    index = state.nodes.length,
    drop = state.pendingDrop,
    isTxt = type === "txt",
    isImage = type === "image",
    isVideo = type === "video",
    seq = Math.max(0, ...state.nodes.map((n) => n.seq || 0)) + 1,
    n = {
      id,
      type,
      seq,
      title: meta[1],
      x: drop?.x ?? 70 + (index % 3) * 240,
      y: drop?.y ?? 90 + Math.floor(index / 3) * 170,
      provider: isTxt ? "custom" : "silicon",
      model: isTxt
        ? "本地文本"
        : isImage
          ? "Kwai-Kolors/Kolors"
          : isVideo
            ? "Wan-AI/Wan2.2-I2V-A14B"
            : providers.silicon.models[0],
      endpoint: "",
      prompt: "",
      negativePrompt: "",
      imageSize: "1024x1024",
      videoSize: "1280x720",
      output: "",
      status: "等待",
    };
  n.endpoint = isTxt ? "" : apiEndpoint(n);
  state.nodes.push(n);
  if (drop?.from) {
    if (drop.direction === "input")
      state.links.push({ from: id, to: drop.from });
    else state.links.push({ from: drop.from, to: id });
  }
  state.pendingDrop = null;
  state.connecting = null;
  state.selected = id;
  save();
  render();
  $("#nodeDialog").close();
}
function render() {
  canvas.innerHTML = "";
  state.nodes.forEach((n) => {
    const e = document.createElement("article");
    e.className = "node" + (n.id === state.selected ? " selected" : "");
    e.dataset.id = n.id;
    e.dataset.type = n.type;
    e.style.left = n.x + "px";
    e.style.top = n.y + "px";
    const model =
        n.type === "txt"
          ? "本地文本 · 无需 API"
          : n.type === "output"
            ? "自动汇总 · 无需 API"
            : `${providers[n.provider]?.name || n.provider} · ${n.model}`,
      inline =
        n.type === "txt"
          ? `<textarea class="node-text" placeholder="直接在节点里输入文字……">${esc(n.prompt || "")}</textarea>`
          : "",
      thumb =
        n.type === "image" && n.output?.startsWith("http")
          ? `<img class="node-thumb" src="${esc(n.output)}" alt="生成图片">`
          : n.type === "video" && n.output?.startsWith("http")
            ? '<div class="node-video">▶ 视频已生成</div>'
            : "";
    e.innerHTML = `<div class="node-head"><b class="seq">${seqText(n)}</b><span>${esc(n.title)}</span><i>${esc(n.status || "等待")}</i></div><div class="node-body">${inline || `<div>${esc(types.find((x) => x[0] === n.type)?.[1] || n.type)}</div><div class="node-model">${esc(model)}</div>${thumb}`}<div class="ports"><button class="port in" title="输入端口：可向前拖出上游节点"></button><button class="port out" title="输出端口：向后拖出下游节点"></button></div></div>`;
    e.onclick = () => select(n.id);
    const text = e.querySelector(".node-text");
    if (text) {
      ["pointerdown", "click", "dblclick", "keydown", "keyup"].forEach((type) =>
        text.addEventListener(type, (ev) => ev.stopPropagation()),
      );
      text.onfocus = () => {
        state.selected = n.id;
        $$(".node").forEach((x) => x.classList.remove("selected"));
        e.classList.add("selected");
        renderInspector();
        save();
      };
      text.oninput = () => {
        n.prompt = text.value;
        n.output = text.value;
        n.status = text.value ? "就绪" : "等待";
        e.querySelector(".node-head i").textContent = n.status;
        save();
      };
    }
    e.querySelector(".port.out").onpointerdown = (ev) =>
      startConnection(ev, n, "output");
    e.querySelector(".port.in").onpointerdown = (ev) =>
      startConnection(ev, n, "input");
    drag(e, n);
    canvas.appendChild(e);
  });
  draw();
  canvas.style.transform = `scale(${state.zoom})`;
  wires.style.transform = `scale(${state.zoom})`;
  $("#zoomText").textContent = Math.round(state.zoom * 100) + "%";
  renderInspector();
  renderTasks();
  renderFlow();
}
function executionOrder() {
  const byId = new Map(state.nodes.map((n) => [n.id, n])),
    degree = new Map(state.nodes.map((n) => [n.id, 0])),
    next = new Map(state.nodes.map((n) => [n.id, []]));
  state.links.forEach((l) => {
    if (byId.has(l.from) && byId.has(l.to)) {
      degree.set(l.to, degree.get(l.to) + 1);
      next.get(l.from).push(l.to);
    }
  });
  const queue = state.nodes
      .filter((n) => degree.get(n.id) === 0)
      .sort((a, b) => a.y - b.y || a.x - b.x),
    ordered = [];
  while (queue.length) {
    const n = queue.shift();
    ordered.push(n);
    next.get(n.id).forEach((id) => {
      degree.set(id, degree.get(id) - 1);
      if (degree.get(id) === 0) {
        queue.push(byId.get(id));
        queue.sort((a, b) => a.y - b.y || a.x - b.x);
      }
    });
  }
  return { ordered, hasCycle: ordered.length !== state.nodes.length };
}
function renderFlow() {
  const byId = Object.fromEntries(state.nodes.map((n) => [n.id, n])),
    plan = executionOrder();
  $("#flowMap").innerHTML = plan.hasCycle
    ? '<span class="flow-error">连线形成了循环，请删除循环中的一条线</span>'
    : plan.ordered.length
      ? '<span class="flow-note">运行：</span>' +
        plan.ordered
          .map(
            (n, i) =>
              `${i ? '<span class="flow-arrow">→</span>' : ""}<button class="flow-step ${n.status === "完成" ? "done" : n.status === "运行中" ? "active" : ""}" data-flow="${n.id}"><b>${n.status === "完成" ? "✓" : seqText(n)}</b>${esc(n.title)}</button>`,
          )
          .join("")
      : '<span class="flow-note">添加并连接节点后，这里会显示真实运行顺序</span>';
  $$("[data-flow]").forEach(
    (b) =>
      (b.onclick = () => {
        select(b.dataset.flow);
        const n = byId[b.dataset.flow];
        wrap.scrollTo({
          left: Math.max(0, n.x - 80),
          top: Math.max(0, n.y - 120),
          behavior: "smooth",
        });
      }),
  );
}
function select(id) {
  state.selected = id;
  state.selectedLink = null;
  save();
  render();
}
function connect(target) {
  if (!state.connecting) return toast("请先点击起始节点的输出端口");
  if (state.connecting === target) return toast("不能连接到自身");
  state.links = state.links.filter((l) => l.to !== target);
  state.links.push({ from: state.connecting, to: target });
  state.connecting = null;
  save();
  render();
  toast("节点已连接");
}
function portCenter(node, side) {
  const port = canvas.querySelector(
    `.node[data-id="${node.id}"] .port.${side}`,
  );
  if (!port) return { x: node.x, y: node.y };
  const portRect = port.getBoundingClientRect();
  const wrapRect = wrap.getBoundingClientRect();
  return {
    x:
      (portRect.left + portRect.width / 2 - wrapRect.left + wrap.scrollLeft) /
      state.zoom,
    y:
      (portRect.top + portRect.height / 2 - wrapRect.top + wrap.scrollTop) /
      state.zoom,
  };
}
function startConnection(ev, node, direction) {
  ev.preventDefault();
  ev.stopPropagation();
  state.connecting = node.id;
  const start = portCenter(node, direction === "output" ? "out" : "in"),
    path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("class", "wire active");
  wires.appendChild(path);
  ev.currentTarget.classList.add("pending");
  const point = (e) => {
    const r = wrap.getBoundingClientRect();
    return {
      x: (e.clientX - r.left + wrap.scrollLeft) / state.zoom,
      y: (e.clientY - r.top + wrap.scrollTop) / state.zoom,
    };
  };
  const move = (e) => {
    const p = point(e),
      m = (start.x + p.x) / 2;
    path.setAttribute(
      "d",
      `M${start.x} ${start.y} C${m} ${start.y},${m} ${p.y},${p.x} ${p.y}`,
    );
  };
  const up = (e) => {
    document.removeEventListener("pointermove", move);
    document.removeEventListener("pointerup", up);
    const wanted = direction === "output" ? ".port.in" : ".port.out",
      hit = document.elementFromPoint(e.clientX, e.clientY)?.closest(wanted),
      target = hit?.closest(".node")?.dataset.id;
    if (target && target !== node.id) {
      if (direction === "output") connect(target);
      else {
        state.links = state.links.filter((l) => l.to !== node.id);
        state.links.push({ from: target, to: node.id });
        state.connecting = null;
        save();
        render();
        toast("节点已连接");
      }
      return;
    }
    const p = point(e);
    state.pendingDrop = {
      from: node.id,
      direction,
      x: Math.max(10, p.x - (direction === "input" ? 170 : 20)),
      y: Math.max(55, p.y - 45),
    };
    $("#nodeDialogTitle").textContent =
      direction === "input" ? "添加并连接上游节点" : "添加并连接下一个节点";
    $("#nodeDialogHint").textContent =
      "选择节点类型后，将在松开位置创建并自动连线";
    $("#nodeDialog").showModal();
    draw();
  };
  document.addEventListener("pointermove", move);
  document.addEventListener("pointerup", up);
}
function draw() {
  wires.innerHTML = state.links
    .map((l, i) => {
      const a = state.nodes.find((n) => n.id === l.from),
        b = state.nodes.find((n) => n.id === l.to);
      if (!a || !b) return "";
      const from = portCenter(a, "out"),
        to = portCenter(b, "in"),
        x1 = from.x,
        y1 = from.y,
        x2 = to.x,
        y2 = to.y,
        m = (x1 + x2) / 2;
      return `<path class="wire${state.selectedLink === i ? " selected" : ""}" data-link="${i}" d="M${x1} ${y1} C${m} ${y1},${m} ${y2},${x2} ${y2}"/>`;
    })
    .join("");
  $$("[data-link]").forEach(
    (path) =>
      (path.onclick = (e) => {
        e.stopPropagation();
        state.selected = null;
        state.selectedLink = Number(path.dataset.link);
        draw();
        renderInspector();
        toast("已选中连线，按 Delete 删除");
      }),
  );
}
function drag(el, n) {
  const h = el.querySelector(".node-head");
  h.onpointerdown = (e) => {
    e.stopPropagation();
    const sx = e.clientX,
      sy = e.clientY,
      ox = n.x,
      oy = n.y;
    h.setPointerCapture(e.pointerId);
    h.onpointermove = (m) => {
      n.x = Math.max(0, ox + (m.clientX - sx) / state.zoom);
      n.y = Math.max(55, oy + (m.clientY - sy) / state.zoom);
      el.style.left = n.x + "px";
      el.style.top = n.y + "px";
      draw();
    };
    h.onpointerup = () => {
      h.onpointermove = null;
      save();
    };
  };
}
function renderInspector() {
  const n = state.nodes.find((x) => x.id === state.selected);
  $("#emptyInspect").hidden = !!n;
  $("#nodeEditor").hidden = !n;
  if (!n) return;
  const isTxt = n.type === "txt",
    isOutput = n.type === "output",
    isImage = n.type === "image";
  $("#nodeType").textContent =
    `${seqText(n)} · ${(types.find((x) => x[0] === n.type)?.[1] || n.type).toUpperCase()}`;
  $("#nodeTitle").textContent = n.title;
  $("#nodeName").value = n.title;
  $("#aiSettings").hidden = isTxt || isOutput;
  $("#imageSettings").hidden = !isImage;
  $("#testApi").hidden = isTxt || isOutput;
  $("#runNode").textContent = isOutput ? "汇总上游素材" : "▶ 运行节点";
  $("#promptLabel").textContent = isTxt
    ? "TXT 文本内容"
    : isImage
      ? "图片提示词（不填写则使用上游节点或核心创意）"
      : "AI 工作要求（系统提示词）";
  $("#promptHelp").textContent = isTxt
    ? "这里写的文字会原样传给下一个节点。"
    : isImage
      ? "可直接写画面，也可留空，让图片节点自动读取前一个节点或左侧“核心创意”。"
      : "告诉 AI 扮演什么角色、完成什么任务、按什么格式输出。";
  $("#prompt").placeholder = isTxt
    ? "在这里输入想法、剧本、提示词或任意文本……"
    : isImage
      ? "例如：写实电影感，雨夜古墓入口，探险者手持矿灯，低饱和冷色"
      : "例如：你是专业编剧，根据输入生成三幕式剧本，只输出 JSON。";
  $("#provider").innerHTML = providersFor(n.type)
    .map(
      ([k, p]) =>
        `<option value="${k}" ${k === n.provider ? "selected" : ""}>${p.name}</option>`,
    )
    .join("");
  renderModels(n);
  $("#endpoint").value = n.endpoint || apiEndpoint(n);
  $("#apiKey").value = sessionStorage.getItem("key_" + n.provider) || "";
  $("#prompt").value = n.prompt || "";
  $("#imageSize").value = n.imageSize || "1024x1024";
  $("#negativePrompt").value = n.negativePrompt || "";
  const imageUrl = isImage && n.output?.startsWith("http") ? n.output : "";
  $("#imagePreview").hidden = !imageUrl;
  $("#imagePreview").innerHTML = imageUrl
    ? `<img src="${esc(imageUrl)}" alt="生成结果"><a href="${esc(imageUrl)}" target="_blank" rel="noopener">打开原图（平台链接约 1 小时有效）</a>`
    : "";
  $("#output").classList.toggle("error-box", n.status === "失败");
  $("#output").textContent = imageUrl
    ? `图片生成成功\n${n.imageMeta || ""}\n已加入左侧“资产”列表。`
    : n.output || "尚未运行";
}
function renderModels(n) {
  const provider = $("#provider").value || n.provider,
    list = modelsFor(provider, n.type);
  if (!list.includes(n.model)) n.model = list[0] || "";
  $("#model").innerHTML = list
    .map((m) => `<option ${m === n.model ? "selected" : ""}>${esc(m)}</option>`)
    .join("");
}
function sync() {
  const n = state.nodes.find((x) => x.id === state.selected);
  if (!n) return;
  n.title = $("#nodeName").value;
  n.provider = $("#provider").value;
  n.model = $("#model").value;
  n.endpoint = $("#endpoint").value;
  n.prompt = $("#prompt").value;
  n.imageSize = $("#imageSize").value;
  n.videoSize = $("#videoSize").value;
  n.negativePrompt = $("#negativePrompt").value;
  sessionStorage.setItem("key_" + n.provider, $("#apiKey").value);
  save();
  render();
}
async function loadModels() {
  const n = state.nodes.find((x) => x.id === state.selected),
    key = $("#apiKey").value;
  if (!n || !key) {
    $("#output").textContent = "请先填写 API Key，再点击读取模型。";
    return toast("请先填写 API Key");
  }
  const url = providers[n.provider]?.modelsEndpoint;
  if (!url) return toast("该平台使用预设模型；可直接选择或填写自定义模型");
  $("#output").textContent =
    "正在连接 " + providers[n.provider].name + " 并读取模型列表…";
  try {
    const r = await fetch(url, { headers: { Authorization: "Bearer " + key } }),
      text = await r.text();
    let d;
    try {
      d = JSON.parse(text);
    } catch {
      d = { message: text };
    }
    if (!r.ok) throw Error(d.error?.message || d.message || `HTTP ${r.status}`);
    const raw = Array.isArray(d) ? d : d.data || [];
    const all = raw
      .map((x) => (typeof x === "string" ? { id: x } : x))
      .filter((x) => x.id);
    const descriptor = (x) =>
      [x.id, x.type, x.task, x.pipeline_tag, x.model_type]
        .filter(Boolean)
        .join(" ");
    const imagePattern =
      /(image|text.to.image|img2img|kolors|flux|stable.?diffusion|sdxl|qwen.?image|hidream|playground|dreamshaper)/i;
    const videoPattern =
      /(video|text.to.video|image.to.video|i2v|t2v|wan\d|cogvideo|hunyuanvideo|ltx.?video|mochi|svd)/i;
    const imageModels = all.filter(
      (x) =>
        imagePattern.test(descriptor(x)) && !videoPattern.test(descriptor(x)),
    );
    const videoModels = all.filter((x) => videoPattern.test(descriptor(x)));
    const mediaIds = new Set([...imageModels, ...videoModels].map((x) => x.id));
    const textModels = all.filter((x) => !mediaIds.has(x.id));
    const groups = { image: imageModels, video: videoModels, text: textModels };
    const modality = n.type === "check" ? "text" : n.type;
    const list = [...new Set((groups[modality] || all).map((x) => x.id))].sort(
      (a, b) => a.localeCompare(b),
    );
    if (!list.length) throw Error("接口成功，但没有返回适合当前节点的模型");
    n.models = list;
    n.model =
      n.type === "image" && list.includes("Kwai-Kolors/Kolors")
        ? "Kwai-Kolors/Kolors"
        : list[0];
    n.endpoint = apiEndpoint(n);
    sessionStorage.setItem("key_" + n.provider, key);
    Object.entries(groups).forEach(([type, models]) => {
      const ids = [...new Set(models.map((x) => x.id))].sort((a, b) =>
        a.localeCompare(b),
      );
      sessionStorage.setItem(
        "models_v2_" + n.provider + "_" + type,
        JSON.stringify(ids),
      );
    });
    renderInspector();
    $("#output").textContent =
      `连接成功：平台共返回 ${all.length} 个模型，当前${modality === "image" ? "生图" : modality === "video" ? "生视频" : "文本"}节点显示 ${list.length} 个。`;
    save();
    toast(`已加载 ${list.length} 个模型`);
  } catch (e) {
    n.output = `模型读取失败\n原因：${e.message}\n建议：确认 Key 有效、账户有余额且网络可访问硅基流动。`;
    n.status = "失败";
    $("#output").textContent = n.output;
    $("#output").classList.add("error-box");
    toast("读取失败，右侧已显示原因");
  }
}
async function runNode(n) {
  if (!n) return;
  if (n.type === "output") {
    const upstream = state.links
      .filter((l) => l.to === n.id)
      .map((l) => state.nodes.find((x) => x.id === l.from))
      .filter(Boolean);
    n.output = upstream
      .map((x) => x.output)
      .filter(Boolean)
      .join("\n");
    n.status = "完成";
    save();
    render();
    return toast("上游素材已汇总");
  }
  if (n.type === "txt") {
    n.output = n.prompt;
    n.status = "完成";
    save();
    render();
    return toast("TXT 文本已传递");
  }
  const key = sessionStorage.getItem("key_" + n.provider);
  if (!key) {
    n.status = "失败";
    n.output =
      "生成失败\n原因：没有读取到 API Key。\n处理：在右侧填入 Key，再点“测试连接”。";
    save();
    render();
    return toast("缺少 API Key");
  }
  n.status = "运行中";
  n.output = "正在请求 " + (providers[n.provider]?.name || n.provider) + "…";
  save();
  render();
  const isImage = n.type === "image",
    controller = new AbortController(),
    timer = setTimeout(() => controller.abort(), isImage ? 180000 : 60000),
    started = Date.now();
  try {
    const upstream = state.links
        .filter((l) => l.to === n.id)
        .map((l) => state.nodes.find((x) => x.id === l.from)?.output)
        .filter((x) => x && !x.startsWith("http"))
        .join("\n"),
      input = [n.prompt, upstream || state.project.idea]
        .filter(Boolean)
        .join("\n\n上游内容：\n");
    if (!input)
      throw Error(
        "没有图片提示词。请在节点、上游 TXT 节点或左侧核心创意中至少填写一处。",
      );
    n.inputUsed = input;
    const endpoint = isImage ? apiEndpoint(n) : n.endpoint,
      body = isImage
        ? n.provider === "openai"
          ? {
              model: n.model,
              prompt: input,
              size:
                n.imageSize === "1664x928"
                  ? "1536x1024"
                  : n.imageSize === "928x1664"
                    ? "1024x1536"
                    : "1024x1024",
              n: 1,
            }
          : {
              model: n.model,
              prompt: input,
              negative_prompt:
                n.negativePrompt || "模糊，低清晰度，水印，文字，畸形",
              image_size: n.imageSize || "1024x1024",
              batch_size: 1,
              num_inference_steps: 20,
              guidance_scale: 7.5,
            }
        : {
            model: n.model,
            messages: [
              { role: "system", content: n.prompt || "按用户要求完成任务" },
              {
                role: "user",
                content: upstream || state.project.idea || "请开始",
              },
            ],
          };
    const r = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + key,
        },
        signal: controller.signal,
        body: JSON.stringify(body),
      }),
      trace = r.headers.get("x-siliconcloud-trace-id") || "",
      text = await r.text();
    let d;
    try {
      d = JSON.parse(text);
    } catch {
      d = { message: text };
    }
    if (!r.ok) {
      const reason =
        d.error?.message ||
        d.message ||
        d.code ||
        text ||
        "平台没有返回错误说明";
      throw Error(
        `HTTP ${r.status}：${reason}${trace ? `\n追踪号：${trace}` : ""}`,
      );
    }
    if (isImage) {
      const url =
        d.images?.[0]?.url ||
        d.data?.[0]?.url ||
        (d.data?.[0]?.b64_json
          ? "data:image/png;base64," + d.data[0].b64_json
          : "");
      if (!url) throw Error("平台返回成功，但响应中没有图片地址。");
      n.output = url;
      n.imageMeta = `耗时 ${Math.round((Date.now() - started) / 1000)} 秒${d.seed !== undefined ? ` · Seed ${d.seed}` : ""}`;
      state.assets.push({
        id: Date.now(),
        name: `${seqText(n)}-${n.title}`,
        image: url,
      });
    } else
      n.output = d.choices?.[0]?.message?.content || JSON.stringify(d, null, 2);
    n.status = "完成";
    toast(isImage ? "图片生成成功" : "节点运行成功");
  } catch (e) {
    const timeout = e.name === "AbortError";
    n.output = `生成失败\n原因：${timeout ? "请求超过等待时间，平台未及时返回" : e.message}\n节点：${seqText(n)} ${n.title}\n模型：${n.model}\n建议：${timeout ? "稍后重试或更换快速模型" : "检查模型是否支持当前任务、Key 余额和参数设置。"}`;
    n.status = "失败";
    toast("生成失败，右侧已显示原因");
  } finally {
    clearTimeout(timer);
  }
  save();
  render();
  renderAssets();
}
const baseRenderInspector = renderInspector;
renderInspector = function () {
  baseRenderInspector();
  const n = state.nodes.find((x) => x.id === state.selected);
  if (!n) return;
  const isVideo = n.type === "video",
    isImage = n.type === "image";
  $("#videoSettings").hidden = !isVideo;
  $("#imageSettings").hidden = !isImage;
  if (!$("#endpointHelp"))
    $("#aiSettings").insertAdjacentHTML(
      "beforeend",
      '<div id="endpointHelp" class="endpoint-help"></div>',
    );
  const usage =
    n.type === "text"
      ? "文本接口：生成剧本、分镜和提示词"
      : isImage
        ? "图片接口：把提示词生成静态画面"
        : isVideo
          ? "视频接口：提交任务后自动轮询成片"
          : "当前节点接口";
  $("#endpointHelp").textContent =
    `${usage}。同平台节点共用账户 Key，但接口和模型各自独立。`;
  if (isVideo) {
    $("#promptLabel").textContent = "视频运动提示词";
    $("#promptHelp").textContent =
      "描述人物动作、镜头运动和环境变化；连接图片节点时自动使用该图片做图生视频。";
    $("#prompt").placeholder =
      "例如：人物缓慢抬起矿灯，镜头向前推进，尘埃飘动，保持人物外观一致";
    $("#videoSize").value = n.videoSize || "1280x720";
    const url = n.output?.startsWith("http") ? n.output : "";
    $("#videoPreview").hidden = !url;
    $("#videoPreview").innerHTML = url
      ? `<video src="${esc(url)}" controls></video>`
      : "";
    $("#imagePreview").hidden = true;
    $("#output").textContent = url
      ? `视频生成成功\n${n.videoMeta || ""}\n已加入左侧“资产”列表。`
      : n.output || "尚未运行";
  } else $("#videoPreview").hidden = true;
};
const baseRunNode = runNode;
runNode = async function (n) {
  if (n?.type !== "video") return baseRunNode(n);
  const key = sessionStorage.getItem("key_" + n.provider);
  if (!key) {
    n.status = "失败";
    n.output = "视频生成失败\n原因：没有读取到 API Key。";
    save();
    render();
    return;
  }
  const upstreamNodes = state.links
      .filter((l) => l.to === n.id)
      .map((l) => state.nodes.find((x) => x.id === l.from))
      .filter(Boolean),
    image = upstreamNodes.find(
      (x) => x.type === "image" && x.output?.startsWith("http"),
    )?.output,
    prompt = [
      n.prompt,
      upstreamNodes
        .map((x) => x.inputUsed || x.prompt || x.output)
        .filter((x) => x && !x.startsWith("http"))
        .join("\n"),
      state.project.idea,
    ]
      .filter(Boolean)
      .join("\n\n上游内容：\n");
  if (!prompt) {
    n.status = "失败";
    n.output = "视频生成失败\n原因：没有视频提示词或上游内容。";
    save();
    render();
    return;
  }
  const wantsImage = n.model?.includes("I2V"),
    model = wantsImage && image ? n.model : "Wan-AI/Wan2.2-T2V-A14B";
  n.status = "运行中";
  n.output = "正在提交视频任务…";
  save();
  render();
  const started = Date.now();
  try {
    const body = {
      model,
      prompt,
      image_size: n.videoSize || "1280x720",
      negative_prompt: n.negativePrompt || "画面抖动，变形，闪烁，文字，水印",
    };
    if (model.includes("I2V")) body.image = image;
    const submit = await fetch("https://api.siliconflow.cn/v1/video/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + key,
        },
        body: JSON.stringify(body),
      }),
      submitText = await submit.text();
    let sd;
    try {
      sd = JSON.parse(submitText);
    } catch {
      sd = { message: submitText };
    }
    if (!submit.ok || !sd.requestId)
      throw Error(
        sd.error?.message || sd.message || `提交失败（HTTP ${submit.status}）`,
      );
    n.requestId = sd.requestId;
    n.output = "视频任务已提交，正在排队…";
    save();
    render();
    let result;
    for (let i = 0; i < 60; i++) {
      await new Promise((r) => setTimeout(r, 10000));
      const rr = await fetch("https://api.siliconflow.cn/v1/video/status", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + key,
          },
          body: JSON.stringify({ requestId: sd.requestId }),
        }),
        txt = await rr.text();
      try {
        result = JSON.parse(txt);
      } catch {
        result = { reason: txt };
      }
      if (!rr.ok)
        throw Error(
          result.error?.message ||
            result.message ||
            `查询失败（HTTP ${rr.status}）`,
        );
      if (result.status === "Failed")
        throw Error(result.reason || "平台视频生成失败");
      if (result.status === "Succeed") break;
      n.output = `视频生成中：${result.status === "InQueue" ? "排队中" : "处理中"}（${(i + 1) * 10} 秒）`;
      save();
      render();
    }
    const url = result?.results?.videos?.[0]?.url;
    if (!url) throw Error("等待超时或平台未返回视频地址");
    n.output = url;
    n.videoMeta = `耗时 ${Math.round((Date.now() - started) / 1000)} 秒`;
    n.status = "完成";
    state.assets.push({
      id: Date.now(),
      name: `${seqText(n)}-${n.title}`,
      video: url,
      nodeId: n.id,
    });
    toast("视频生成成功");
  } catch (e) {
    n.status = "失败";
    n.output = `视频生成失败\n原因：${e.message}\n模型：${model}\n建议：确认账户余额、模型与输入图片是否匹配。`;
    toast("视频失败，右侧已显示原因");
  }
  save();
  render();
  renderAssets();
};
function renderTasks() {
  $("#taskList").innerHTML =
    state.nodes
      .map(
        (n) =>
          `<div class="task"><span>${esc(n.title)}</span><i>${esc(n.status)}</i></div>`,
      )
      .join("") || "<small>暂无任务</small>";
}
function showTab(name) {
  ["project", "assets", "tasks"].forEach(
    (x) => ($("#" + x + "Panel").hidden = x !== name),
  );
  $$("[data-tab]").forEach((b) =>
    b.classList.toggle("on", b.dataset.tab === name),
  );
}
function renderAssets() {
  $("#assetList").innerHTML =
    state.assets
      .map((a) => {
        const kind = a.video ? "视频" : "图片",
          src = a.video || a.image;
        return `<div class="asset" data-asset="${a.id}" title="单击放大预览"><${a.video ? "video muted" : "img"} src="${esc(src)}"></${a.video ? "video" : "img"}><span>${esc(a.name)}<small class="asset-kind">${kind} · 单击预览</small></span><button class="rerun" data-rerun="${a.id}" title="只重新生成这个">↻</button></div>`;
      })
      .join("") || "<small>生成的图片和视频会显示在这里</small>";
  $$("[data-asset]").forEach(
    (e) =>
      (e.onclick = (ev) => {
        if (ev.target.closest("[data-rerun]")) return;
        openAsset(Number(e.dataset.asset));
      }),
  );
  $$("[data-rerun]").forEach(
    (b) =>
      (b.onclick = (ev) => {
        ev.stopPropagation();
        rerunAsset(Number(b.dataset.rerun));
      }),
  );
}
function sourceNodeForAsset(a) {
  return (
    state.nodes.find((n) => n.id === a.nodeId) ||
    state.nodes.find((n) => a.name?.startsWith(seqText(n) + "-"))
  );
}
function openAsset(id) {
  const a = state.assets.find((x) => x.id === id);
  if (!a) return;
  const src = a.video || a.image;
  $("#mediaLarge").innerHTML = a.video
    ? `<video src="${esc(src)}" controls autoplay></video>`
    : `<img src="${esc(src)}" alt="${esc(a.name)}">`;
  $("#mediaRerun").onclick = () => {
    rerunAsset(id);
    $("#mediaDialog").close();
  };
  $("#mediaOpen").onclick = () => window.open(src, "_blank");
  $("#mediaDialog").showModal();
}
async function rerunAsset(id) {
  const a = state.assets.find((x) => x.id === id),
    n = a && sourceNodeForAsset(a);
  if (!n) return toast("找不到这个素材对应的节点");
  state.selected = n.id;
  render();
  toast(`只重新生成 ${seqText(n)} ${n.title}`);
  await runNode(n);
}
$("#nodeCatalog").innerHTML = types
  .map(
    (t) =>
      `<button class="catalog" data-type="${t[0]}"><strong>${t[1]}</strong><small>${t[2]}</small></button>`,
  )
  .join("");
$$(".catalog").forEach((b) => (b.onclick = () => addNode(b.dataset.type)));
$$("[data-tab]").forEach((b) => (b.onclick = () => showTab(b.dataset.tab)));
$("#addNode").onclick = () => {
  state.pendingDrop = null;
  $("#nodeDialogTitle").textContent = "添加节点";
  $("#nodeDialogHint").textContent = "选择要添加的节点类型";
  $("#nodeDialog").showModal();
};
$("#cancelNode").onclick = () => {
  state.pendingDrop = null;
  state.connecting = null;
  draw();
  $("#nodeDialog").close();
};
function deleteSelection() {
  if (Number.isInteger(state.selectedLink)) {
    state.links.splice(state.selectedLink, 1);
    state.selectedLink = null;
    save();
    render();
    return toast("连线已删除");
  }
  if (state.selected) {
    state.nodes = state.nodes.filter((n) => n.id !== state.selected);
    state.links = state.links.filter(
      (l) => l.from !== state.selected && l.to !== state.selected,
    );
    state.selected = null;
    save();
    render();
    return toast("节点已删除");
  }
  toast("请先选择节点或连线");
}
$("#deleteSelection").onclick = deleteSelection;
document.addEventListener("keydown", (e) => {
  if (
    (e.key === "Delete" || e.key === "Backspace") &&
    !/INPUT|TEXTAREA|SELECT/.test(document.activeElement?.tagName)
  ) {
    e.preventDefault();
    deleteSelection();
  }
});
$("#clearCanvas").onclick = () => {
  if (confirm("确定清空全部节点和连线？")) {
    state.nodes = [];
    state.links = [];
    state.selected = null;
    state.selectedLink = null;
    save();
    render();
  }
};
function loadLearningTemplate() {
  if (state.nodes.length && !confirm("载入模板会替换当前画布，确定继续吗？"))
    return;
  const make = (id, seq, type, title, x, y, prompt = "", model = "") => ({
    id,
    seq,
    type,
    title,
    x,
    y,
    prompt,
    provider: type === "txt" ? "custom" : "silicon",
    model:
      model ||
      (type === "txt"
        ? "本地文本"
        : type === "image"
          ? "Kwai-Kolors/Kolors"
          : type === "video"
            ? "Wan-AI/Wan2.2-I2V-A14B"
            : "deepseek-ai/DeepSeek-V4-Flash"),
    endpoint: "",
    negativePrompt: "模糊，变形，水印，文字",
    imageSize: "1664x928",
    videoSize: "1280x720",
    output: "",
    status: "等待",
  });
  state.nodes = [
    make("idea", 1, "txt", "① 输入一个想法", 40, 130, "在这里写你的故事想法"),
    make(
      "master",
      2,
      "text",
      "② 生成分镜提示词",
      280,
      130,
      "把想法拆成3个连续分镜。每个分镜输出：画面提示词、人物动作、镜头运动。保持人物外观和服装一致。",
      "deepseek-ai/DeepSeek-V4-Flash",
    ),
    make(
      "extract1",
      3,
      "text",
      "③ 提取分镜 1",
      520,
      40,
      "只提取上游内容中分镜1的画面提示词，不要解释。",
      "deepseek-ai/DeepSeek-V4-Flash",
    ),
    make("image1", 4, "image", "④ 分镜图 1", 760, 40),
    make(
      "video1",
      5,
      "video",
      "⑤ 视频 1",
      1000,
      40,
      "人物缓慢观察环境，镜头稳定向前推进，动作自然",
    ),
    make(
      "extract2",
      6,
      "text",
      "⑥ 提取分镜 2",
      520,
      250,
      "只提取上游内容中分镜2的画面提示词，不要解释。",
      "deepseek-ai/DeepSeek-V4-Flash",
    ),
    make("image2", 7, "image", "⑦ 分镜图 2", 760, 250),
    make(
      "video2",
      8,
      "video",
      "⑧ 视频 2",
      1000,
      250,
      "人物谨慎向前移动，镜头轻微跟随，保持人物一致",
    ),
    make(
      "extract3",
      9,
      "text",
      "⑨ 提取分镜 3",
      520,
      460,
      "只提取上游内容中分镜3的画面提示词，不要解释。",
      "deepseek-ai/DeepSeek-V4-Flash",
    ),
    make("image3", 10, "image", "⑩ 分镜图 3", 760, 460),
    make(
      "video3",
      11,
      "video",
      "⑪ 视频 3",
      1000,
      460,
      "环境出现细微变化，镜头缓慢拉近，悬疑氛围",
    ),
  ];
  state.nodes.forEach(
    (n) => (n.endpoint = n.type === "txt" ? "" : apiEndpoint(n)),
  );
  state.links = [
    { from: "idea", to: "master" },
    { from: "master", to: "extract1" },
    { from: "extract1", to: "image1" },
    { from: "image1", to: "video1" },
    { from: "master", to: "extract2" },
    { from: "extract2", to: "image2" },
    { from: "image2", to: "video2" },
    { from: "master", to: "extract3" },
    { from: "extract3", to: "image3" },
    { from: "image3", to: "video3" },
  ];
  state.selected = "idea";
  state.assets = [];
  save();
  render();
  renderAssets();
  toast("学习模板已载入，不会自动运行");
}
function loadAutomationTemplate() {
  if (
    state.nodes.length &&
    !confirm("将在当前画布载入 8 步自动化流程，确定继续吗？")
  )
    return;
  const steps = [
    [
      "requirements",
      "txt",
      "第 1 步 · 需求",
      "写下题材、受众、时长、画面比例、人物和核心冲突。",
    ],
    [
      "outline",
      "text",
      "第 2 步 · 大纲",
      "根据需求生成完整故事大纲，明确开端、发展、高潮和结局。",
    ],
    [
      "design",
      "text",
      "第 3 步 · 角色、场景与道具设计",
      "整理角色外貌与服装、场景空间与光线、关键道具细节，保证后续一致。",
    ],
    [
      "designImage",
      "image",
      "第 4 步 · 角色、场景与道具图",
      "生成角色全身设定、主要场景和关键道具的统一视觉设定图。",
    ],
    [
      "storyboard",
      "text",
      "第 5 步 · 分镜脚本",
      "结合大纲和视觉设定输出分镜脚本，每镜包含画面、台词、动作、景别、机位和时长。",
    ],
    [
      "keyframe",
      "image",
      "第 6 步 · 关键帧",
      "根据分镜脚本生成电影感关键帧，保持人物、服装、场景和道具一致。",
    ],
    [
      "shotVideo",
      "video",
      "第 7 步 · 分镜视频",
      "根据关键帧和分镜脚本生成镜头，动作自然，运镜稳定，保持主体一致。",
    ],
    [
      "final",
      "output",
      "第 8 步 · 成片导出",
      "汇总全部上游图片、视频和文本素材。",
    ],
  ];
  state.nodes = steps.map(([id, type, title, prompt], index) => {
    const n = {
      id,
      type,
      seq: index + 1,
      title,
      prompt,
      x: 40 + (index % 4) * 245,
      y: 130 + Math.floor(index / 4) * 220,
      provider: type === "txt" || type === "output" ? "custom" : "silicon",
      model:
        type === "txt"
          ? "本地文本"
          : type === "image"
            ? "Kwai-Kolors/Kolors"
            : type === "video"
              ? "Wan-AI/Wan2.2-I2V-A14B"
              : type === "output"
                ? "自动汇总"
                : "deepseek-ai/DeepSeek-V4-Flash",
      endpoint: "",
      negativePrompt: "模糊，变形，水印，文字",
      imageSize: "1664x928",
      videoSize: "1280x720",
      output: "",
      status: "等待",
    };
    n.endpoint = type === "txt" || type === "output" ? "" : apiEndpoint(n);
    return n;
  });
  state.links = steps
    .slice(1)
    .map((step, index) => ({ from: steps[index][0], to: step[0] }));
  state.assets = [];
  state.selected = "requirements";
  state.selectedLink = null;
  save();
  render();
  renderAssets();
  toast("8 步自动化流程已搭建，从第 1 步开始填写即可");
}
$("#loadTemplate").onclick = loadAutomationTemplate;
$("#provider").onchange = () => {
  const n = state.nodes.find((x) => x.id === state.selected);
  n.provider = $("#provider").value;
  n.endpoint = apiEndpoint(n);
  n.model =
    n.type === "image" && n.provider === "silicon"
      ? "Kwai-Kolors/Kolors"
      : n.type === "video" && n.provider === "silicon"
        ? "Wan-AI/Wan2.2-I2V-A14B"
        : providers[n.provider].models[0];
  renderInspector();
  save();
};
[
  "nodeName",
  "model",
  "endpoint",
  "apiKey",
  "prompt",
  "imageSize",
  "videoSize",
  "negativePrompt",
].forEach((id) => ($("#" + id).onchange = sync));
$("#prompt").oninput = () => {
  const n = state.nodes.find((x) => x.id === state.selected);
  if (n) {
    n.prompt = $("#prompt").value;
    save();
  }
};
$("#negativePrompt").oninput = () => {
  const n = state.nodes.find((x) => x.id === state.selected);
  if (n) {
    n.negativePrompt = $("#negativePrompt").value;
    save();
  }
};
$("#apiKey").oninput = () => {
  const n = state.nodes.find((x) => x.id === state.selected);
  if (n) sessionStorage.setItem("key_" + n.provider, $("#apiKey").value);
};
$("#loadModels").onclick = loadModels;
$("#testApi").onclick = loadModels;
$("#runNode").onclick = () =>
  runNode(state.nodes.find((x) => x.id === state.selected));
$("#runAll").onclick = async () => {
  const plan = executionOrder();
  if (plan.hasCycle) return toast("无法运行：请先删除循环连线");
  if (!plan.ordered.length) return toast("画布上还没有节点");
  for (const n of plan.ordered) await runNode(n);
};
$("#zoomIn").onclick = () => {
  state.zoom = Math.min(1.4, state.zoom + 0.1);
  render();
};
$("#zoomOut").onclick = () => {
  state.zoom = Math.max(0.5, state.zoom - 0.1);
  render();
};
wrap.onwheel = (e) => {
  e.preventDefault();
  state.zoom = Math.max(
    0.5,
    Math.min(1.4, state.zoom + (e.deltaY < 0 ? 0.08 : -0.08)),
  );
  render();
  save();
};
let pan;
wrap.onpointerdown = (e) => {
  if (
    e.target.closest?.(".node") ||
    e.target.closest?.(".toolbar") ||
    e.target.closest?.(".wire")
  )
    return;
  pan = { x: e.clientX, y: e.clientY, l: wrap.scrollLeft, t: wrap.scrollTop };
  wrap.setPointerCapture(e.pointerId);
};
wrap.onpointermove = (e) => {
  if (pan) {
    wrap.scrollLeft = pan.l - (e.clientX - pan.x);
    wrap.scrollTop = pan.t - (e.clientY - pan.y);
  }
};
wrap.onpointerup = () => (pan = null);
wrap.ondblclick = (e) => {
  if (e.target.closest?.(".node")) return;
  const r = wrap.getBoundingClientRect();
  state.pendingDrop = {
    x: (e.clientX - r.left + wrap.scrollLeft) / state.zoom - 30,
    y: (e.clientY - r.top + wrap.scrollTop) / state.zoom - 35,
  };
  $("#nodeDialogTitle").textContent = "在这里添加节点";
  $("#nodeDialogHint").textContent = "选择节点类型后，将在双击位置创建";
  $("#nodeDialog").showModal();
};
[
  "projectName",
  "idea",
  "episodes",
  "duration",
  "projectType",
  "ratio",
  "visualStyle",
].forEach((id) => ($("#" + id).oninput = save));
$("#settings").onclick = () => {
  renderApiList();
  $("#apiDialog").showModal();
};
function renderApiList() {
  $("#apiList").innerHTML = Object.entries(providers)
    .map(
      ([k, p]) =>
        `<label class="api-row"><span>${p.name}</span><input type="password" data-key="${k}" value="${esc(sessionStorage.getItem("key_" + k) || "")}" placeholder="API Key"></label>`,
    )
    .join("");
  $$("[data-key]").forEach(
    (e) =>
      (e.onchange = () =>
        sessionStorage.setItem("key_" + e.dataset.key, e.value)),
  );
}
$("#addAsset").onclick = () => $("#assetFile").click();
$("#assetFile").onchange = (e) => {
  const f = e.target.files[0];
  if (!f) return;
  const r = new FileReader();
  r.onload = () => {
    state.assets.push({ id: Date.now(), name: f.name, image: r.result });
    save();
    renderAssets();
  };
  r.readAsDataURL(f);
};
function exportProject() {
  const a = document.createElement("a"),
    url = URL.createObjectURL(
      new Blob([JSON.stringify(state, null, 2)], { type: "application/json" }),
    );
  a.href = url;
  a.download = (state.project.name || "成成的工作台项目") + ".json";
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
$("#export").onclick = exportProject;
$("#saveProject").onclick = () => {
  save();
  toast("项目已保存到当前浏览器");
};
$("#newProject").onclick = () => {
  save();
  const number = workspace.canvases.length + 1;
  const canvasItem = {
    id: "canvas-" + Date.now(),
    name: `画布 ${number}`,
    state: emptyState(),
  };
  workspace.canvases.push(canvasItem);
  workspace.activeId = canvasItem.id;
  state = canvasItem.state;
  fillProjectForm();
  renderCanvasSelect();
  render();
  renderAssets();
  save();
  toast(`已新建 ${canvasItem.name}，原画布已保留`);
};
$("#canvasSelect").onchange = (e) => switchCanvas(e.target.value);
$("#import").onclick = () => $("#projectFile").click();
$("#projectFile").onchange = async (e) => {
  try {
    state = JSON.parse(await e.target.files[0].text());
    state.selectedLink = null;
    save();
    render();
    renderAssets();
    toast("项目已导入");
  } catch {
    toast("项目文件无效");
  }
};
fillProjectForm();
renderCanvasSelect();
render();
renderAssets();
showTab("project");
save();

// Keep platform credentials and model catalogs strictly isolated.
$("#provider").onchange = () => {
  const n = state.nodes.find((x) => x.id === state.selected);
  if (!n) return;
  n.provider = $("#provider").value;
  n.models = [];
  const list = modelsFor(n.provider, n.type);
  n.model = list[0] || "";
  n.endpoint = apiEndpoint(n);
  save();
  render();
  toast(`已切换到 ${providers[n.provider].name}`);
};

const balanceConfig = {
  silicon: {
    url: "https://api.siliconflow.cn/v1/user/info",
    read: (d) => d.data?.balance ?? d.balance ?? d.data?.totalBalance,
  },
  deepseek: {
    url: "https://api.deepseek.com/user/balance",
    read: (d) =>
      d.balance_infos
        ?.map((x) => `${x.currency} ${x.total_balance}`)
        .join(" / ") || d.total_balance,
  },
  lingke: null,
  openai: null,
  custom: null,
};
function renderApiList() {
  $("#apiList").innerHTML = Object.entries(providers)
    .map(
      ([k, p]) =>
        `<div class="api-account"><strong>${esc(p.name)}</strong><input type="password" data-key="${k}" value="${esc(sessionStorage.getItem("key_" + k) || "")}" placeholder="${esc(p.name)} API Key"><button data-balance="${k}">查余额</button><div class="api-balance" data-balance-result="${k}">${balanceConfig[k] ? "填写 Key 后可查询" : "该平台未提供可用的余额接口"}</div></div>`,
    )
    .join("");
  $$("[data-key]").forEach(
    (e) =>
      (e.oninput = () =>
        sessionStorage.setItem("key_" + e.dataset.key, e.value)),
  );
  $$("[data-balance]").forEach(
    (b) => (b.onclick = () => checkBalance(b.dataset.balance)),
  );
}
async function checkBalance(provider) {
  const box = $(`[data-balance-result="${provider}"]`),
    config = balanceConfig[provider],
    key =
      sessionStorage.getItem("key_" + provider) ||
      $(`[data-key="${provider}"]`)?.value;
  if (!config) {
    box.className = "api-balance";
    box.textContent = "该平台未提供可用的余额接口";
    return;
  }
  if (!key) {
    box.className = "api-balance error";
    box.textContent = "请先填写这个平台的 API Key";
    return;
  }
  box.className = "api-balance";
  box.textContent = "正在查询…";
  try {
    const r = await fetch(config.url, {
        headers: { Authorization: "Bearer " + key },
      }),
      text = await r.text();
    let d;
    try {
      d = JSON.parse(text);
    } catch {
      d = { message: text };
    }
    if (!r.ok) throw Error(d.error?.message || d.message || `HTTP ${r.status}`);
    const balance = config.read(d);
    if (balance === undefined || balance === null || balance === "")
      throw Error("平台响应中没有余额字段");
    box.className = "api-balance ok";
    box.textContent = `可用余额：${balance}`;
  } catch (e) {
    box.className = "api-balance error";
    box.textContent = `查询失败：${e.message}`;
  }
}
