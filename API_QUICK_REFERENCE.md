# API Quick Reference

## Endpoint

```
POST https://interview-prep-backend-indol.vercel.app/api/v1/interview-bit
```

## Headers

```json
Content-Type: application/json
```

---

## 1. Get Question (Start Interview)

**Request:**

```json
{
  "role": "software-engineer",
  "mode": "technical",
  "action": "start",
  "answer": "",
  "previousQuestion": ""
}
```

**Response:**

```json
{
  "question": "Explain the difference between let, const, and var...",
  "topic": "JavaScript Fundamentals",
  "difficulty": "Easy",
  "notes": "Focus on scope, hoisting, and reassignment."
}
```

---

## 2. Submit Answer

**Request:**

```json
{
  "role": "software-engineer",
  "mode": "technical",
  "action": "answer",
  "previousQuestion": "Explain the difference between let, const, and var...",
  "answer": "let and const are block-scoped, while var is function-scoped."
}
```

**Response:**

```json
{
  "was_your_answer_correct": true,
  "explanation": "Correct! You've covered the key differences..."
}
```

---

## Roles

- `software-engineer`
- `product-manager`
- `data-analyst`
- `ui-ux-designer`
- `data-scientist`
- `database-admin`

## Modes

- `technical`
- `behavioral`

---

## Quick Test (cURL)

```bash
# Get question
curl -X POST https://interview-prep-backend-indol.vercel.app/api/v1/interview-bit \
  -H "Content-Type: application/json" \
  -d '{"role":"software-engineer","mode":"technical","action":"start","answer":"","previousQuestion":""}'

# Submit answer
curl -X POST https://interview-prep-backend-indol.vercel.app/api/v1/interview-bit \
  -H "Content-Type: application/json" \
  -d '{"role":"software-engineer","mode":"technical","action":"answer","previousQuestion":"Your question here","answer":"Your answer here"}'
```

---

## Quick Test (JavaScript)

```javascript
// Get question
const question = await fetch(API_URL, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    role: "software-engineer",
    mode: "technical",
    action: "start",
    answer: "",
    previousQuestion: "",
  }),
}).then((r) => r.json());

// Submit answer
const feedback = await fetch(API_URL, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    role: "software-engineer",
    mode: "technical",
    action: "answer",
    previousQuestion: question.question,
    answer: "Your answer here",
  }),
}).then((r) => r.json());
```
