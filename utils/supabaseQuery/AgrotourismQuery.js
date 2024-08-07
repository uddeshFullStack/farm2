
import supabase from '../supabase/server'
export async function fetchAgrotourismSuggestion() {
  const { data, error } = await supabase
    .from("AgrotourismSuggestion")
    .select('*')
    // console.log(data);
  if (error) throw new Error("Error fetching Break Even Details!");

  return data;
}

export const upsertAgrotourismSuggestion = async (data) => {
  const response = await supabase.from("AgrotourismSuggestion").upsert(data);
  return response
};
