import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useVideoList(videoId) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    (async () => {
      setError(false);
      setLoading(true);

      const db = getDatabase();
      const questionsRef = ref(db, `quiz/${videoId}/questions`);
      const questionQuery = query(questionsRef, orderByKey());

      try {
        const snapshot = await get(questionQuery);
        setLoading(false);
        if (snapshot.exists()) {
          setQuestions(snapshot.val());
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    })();
  }, [videoId]);

  return {
    loading,
    error,
    questions,
  };
}
