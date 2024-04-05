import { defineStore } from 'pinia';
import { ref } from 'vue';

const API_URL = (import.meta as any).env.VITE_API_URL;

enum NodeKind {
  Unknown,
  Ssss = 'ssss',
  Runner = 'runner',
}

type Node = {
  kind: NodeKind;
  host: string;
};

export const useRegistry = defineStore('registry', () => {
  const nodes = ref<Node[]>([]);

  return {
    fetchAllNodes: async () => (nodes.value = await doFetch('/nodes')),
    registerNode: (host: string) => doFetch('/nodes', { host }),
  };
});

async function doFetch<T>(path: string, body?: object): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    method: body ? 'POST' : 'GET',
    headers: {
      'content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (res.ok) return await res.json();

  const resText = await res.text();
  let error = resText;
  try {
    error = JSON.parse(resText).error;
  } catch {}
  throw new Error(error);
}
