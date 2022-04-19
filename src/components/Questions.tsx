import { useEffect } from "react";
import { Form } from "react-bootstrap";
import AI from "../assets/svg/นั่ง1.svg";
import DetectNumberService from "../services/detectNumber.service";

interface QuestionsProps {
  transcript: string;
  point: number;
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
  no,
  setPoint,
  major,
  setMajor,
  setStatus,
}: QuestionsProps) {
  const processQuestion1 = (value: string) => {
    if (
      value.includes("อย่าร้าง") ||
      value.includes("เลิก") ||
      value.includes("อย่า")
    ) {
      setPoint(1);
    }
  };
  const processQuestion2 = (value: string) => {
    if (value.includes("ไทย") || value.includes("Thailand")) {
      setPoint(point + 1);
    }
  };
  const processQuestion3 = (value: string) => {
    if (value !== "") {
      DetectNumberService.getDetectNumber(value).then((res) => {
        for (var i = 0; i < res.types.length; i++) {
          if (res.types[i] === 2) {
            for (var j = 0; j <= i; j++) {
              setPoint(Number(res.tokens[j]) + point);
            }
          }
        }
      });
    }
  };
  const processQuestion4 = (value: string) => {
    if (value.includes("ไม่เคย") || value.includes("ไม่")) {
      setPoint(point + 1);
    }
  };
  const processQuestion5 = (value: string) => {
    if (value !== "") {
      const formatComma = value.replace(/,/g, "");
      DetectNumberService.getDetectNumber(formatComma).then((res) => {
        for (var i = 0; i < res.types.length; i++) {
          if (res.types[i] === 2) {
            for (var j = 0; j <= i; j++) {
              setPoint(point + Number(res.tokens[j]) / 360000);
            }
          }
        }
      });
    }
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
    if (value !== "") setPoint(point);
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
      <style
        dangerouslySetInnerHTML={{
          __html: `\nbody{\nbackground-image: url('${AI}');height: 100%;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;\n}\n`,
        }}
      />
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
      {major !== "" ? `สาขาที่เรียน: ${major}` : <></>}
    </>
  );
}
