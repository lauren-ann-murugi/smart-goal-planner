# Smart Goal Planner

This is a personal React project I built to help users manage their financial savings goals. It allows users to create, edit, delete, and track progress on multiple goals with a focus on clear deadlines and visual feedback.

---
<img width="1896" height="617" alt="Screenshot 2025-07-20 234452" src="https://github.com/user-attachments/assets/795e4197-0406-4ff6-9e48-b81002eb0d47" />
<img width="1804" height="689" alt="Screenshot 2025-07-20 234523" src="https://github.com/user-attachments/assets/a2654670-fe95-4932-9661-730e61ef4d2b" />
<img width="1744" height="263" alt="Screenshot 2025-07-20 234544" src="https://github.com/user-attachments/assets/4858a6ef-637e-4489-8a2d-1597ca7eb513" />

## Features

### 1. Create New Goals
Users can create a new savings goal by filling in:
- Name of the goal
- Target amount
- Category (e.g., Travel, Business, Education)
- Deadline

All goals are timestamped with the creation date for better tracking.

---

### 2. Track Progress Visually
Each goal displays a progress bar that updates based on how much has been saved toward the target. The percentage is calculated and color-coded depending on the progress.

---

### 3. Make Deposits
There's a dedicated form for depositing money into any existing goal. When a deposit is made, the saved amount updates in real-time and reflects in the progress bar.

---

### 4. Edit or Delete Goals
Users can update any part of a goal’s data or remove a goal entirely. Editing is handled via an embedded form inside each goal card.

---

### 5. Overview Dashboard
At the top of the app, there's a summary section that displays:
- Total number of goals
- Total amount saved across all goals
- Number of completed goals (when savedAmount ≥ targetAmount)
- Warnings for goals approaching or past their deadline

---

## Technical Stack

- **Frontend:** React (Functional Components + Hooks)
- **API:** JSON Server (`db.json` on `localhost:3001`)
- **Styling:** Custom CSS with a luxe, classic aesthetic
- **State Management:** Local state with `useState` and `useEffect`

---

## Challenges I Solved

- Managing controlled forms for multiple components
- Keeping global `goals` state in sync with server updates
- Updating nested goal data without mutating state

---

##  Steps I Took to Push My Project

### 1. Navigate to My Project Folder and Initialize Git

```
cd smart-goal-planner
git init
```
### 2. Add My Project Files to Git Tracking

```
git add .
```

### 3.  Commit the Files Locally

```
git commit -m "Initial commit - Smart Goal Planner project"
```

### 4. Link My Local Repo to the GitHub Repository
```
git remote add origin https://github.com/<my-username>/smart-goal-planner.git
```

### 5.  Push My Code to GitHub
```
git branch -M main
git push -u origin main
```












