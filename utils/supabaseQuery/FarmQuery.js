import { createClient } from "../supabase/server";
const supabase = createClient();

export async function fetchFarmList() {
  const { data, error } = await supabase
    .from("FarmList")
    .select("*")
  if (error) throw new Error("Error fetching Break Even Details!");

  return data[0];
}

export const upsertBreakEvenData = async (data) => {
  const { error } = await supabase.from("FarmList").upsert(data);
  if (error) {
    console.error(error);
    throw error;
  }
};
