import { toRefs, reactive, watch } from "vue";

export default function () {
  const state = reactive({
    response: [],
    error: null,
    fetching: true,
  });

  const fetchData = async () => {
    try {
      const res = await fetch(url, options);
      const json = await response.json();
      state.response = json;
    } catch (errors) {
      state.error = errors;
    } finally {
      state.fetching = false;
    }
  };

  return { ...toRefs(state), fetchData };
}
