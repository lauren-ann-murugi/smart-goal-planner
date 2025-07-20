const API_URL = "http://localhost:3001/goals";

export const getGoals = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const createGoal = async (goal) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(goal)
  });
  return res.json();
};

export const updateGoal = async (id, data) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return res.json();
};

export const deleteGoal = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
};