import { useEffect } from "react";
import { Form } from "react-bootstrap";

interface QuestionsProps {
  transcript: string;
  point: number;
  questions: string;
  no: string;
  setPoint: (value: React.SetStateAction<number>) => void;
}

export default function Questions({
  transcript,
  point,
  questions,
  no,
  setPoint,
}: QuestionsProps) {
  const processQuestion1 = (value: string) => {
    if (value.includes("จันทรเกษม")) setPoint(point + 1);
  };
  const processQuestion2 = (value: string) => {
    if (value.includes("ไทย")) setPoint(point + 1);
  };

  useEffect(() => {
    switch (no) {
      case "1":
        processQuestion1(transcript);
        break;
      case "2":
        processQuestion2(transcript);
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transcript, no]);

  return (
    <>
      <h1>คำถามตัวอย่างข้อ {no}</h1>
      <h2>{questions}</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            value={transcript}
            readOnly
            placeholder="คำตอบ"
          />
        </Form.Group>
      </Form>
      {point > 0 ? `คะแนน = ${point}` : <></>}
    </>
  );
}
