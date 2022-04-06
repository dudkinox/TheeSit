import { useEffect } from "react";
import { Form } from "react-bootstrap";

interface QuestionsProps {
  transcript: string;
  point: number;
  questions: string;
  no: string;
  setPoint: (value: React.SetStateAction<number>) => void;
  major: string;
  setMajor: (value: React.SetStateAction<string>) => void;
  status: boolean;
  setStatus: (value: React.SetStateAction<boolean>) => void;
}

export default function Questions({
  transcript,
  point,
  questions,
  no,
  setPoint,
  major,
  setMajor,
  status,
  setStatus,
}: QuestionsProps) {
  const processQuestion1 = (value: string) => {
    if (value.includes("จันทรเกษม")) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  };
  const processQuestion2 = (value: string) => {
    if (value.includes("ไทย") || value.includes("Thailand")) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  };
  const processQuestion3 = (value: string) => {
    //   จับตัวเลข
    if (value !== "") setPoint(point + Number(value));
  };
  const processQuestion4 = (value: string) => {
    //   จับหมวดหมู่ปฏิเสธ
    if (value !== "") setStatus(true);
  };
  const processQuestion5 = (value: string) => {
    //   จับตัวเลข
    if (value !== "") setPoint(point + Number(value) / 360);
  };
  const processQuestion6 = (value: string) => {
    //   จับตัวเลข
    if (value !== "") {
      if (Number(value) <= 30) {
        setStatus(true);
      } else {
        setStatus(false);
      }
    }
  };
  const processQuestion7 = (value: string) => {
    if (value !== "") setMajor(value);
  };
  const processQuestion8 = (value: string) => {
    //   จับหมวดหมู่สาขา
    if (value !== "") setPoint(point);
  };
  const processQuestion9 = (value: string) => {
    //   จับหมวดหมู่สาขา และจับตัวเลขจำนวนชั่วโมง
    if (value !== "") setPoint(point + Number(value));
  };
  const processQuestion10 = (value: string) => {
    //   จับตัวเลข
    if (value !== "") setPoint(point + Number(value));
  };

  useEffect(() => {
    switch (no) {
      case "1":
        processQuestion1(transcript);
        break;
      case "2":
        processQuestion2(transcript);
        break;
      case "3":
        processQuestion3(transcript);
        break;
      case "4":
        processQuestion4(transcript);
        break;
      case "5":
        processQuestion5(transcript);
        break;
      case "6":
        processQuestion6(transcript);
        break;
      case "7":
        processQuestion7(transcript);
        break;
      case "8":
        processQuestion8(transcript);
        break;
      case "9":
        processQuestion9(transcript);
        break;
      case "10":
        processQuestion10(transcript);
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
      <br />
      {status ? "ยังรอดอยู่" : "ไม่ผ่านเกณฑ์แล้ว"}
      <br />
      {major !== "" ? `สาขาที่เรียน: ${major}` : <></>}
    </>
  );
}
