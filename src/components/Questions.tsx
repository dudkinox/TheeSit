import { useEffect } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import { useSpeechRecognition } from "react-speech-recognition";
import DetectClassificationService from "../services/detectClassification.service";
import DetectNumberService from "../services/detectNumber.service";

interface QuestionsProps {
  point: number;
  no: string;
  setPoint: (value: React.SetStateAction<number>) => void;
  major: string;
  setMajor: (value: React.SetStateAction<string>) => void;
  transcript: string;
}

export default function Questions({
  point,
  no,
  setPoint,
  setMajor,
  transcript,
}: QuestionsProps) {
  const { listening } = useSpeechRecognition();
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
            // todo
            // กำหนกช่วง
            for (var j = 0; j <= i; j++) {
              setPoint(point + Number(res.tokens[j]) / 360000);
            }
          }
        }
      });
    }
  };
  const processQuestion6 = (value: string) => {
    DetectClassificationService.getDetectClassification(value, "10").then(
      (res) => {
        for (var i = 0; i < res.tags.length; i++) {
          if (res.tags[i].tag.includes("งาน")) {
            setPoint(point + 1);
            console.log(res.tags[i].tag);
            break;
          }
          if (res.tags[i].tag.includes("พิการ")) {
            setPoint(point + 1);
            console.log(res.tags[i].tag);
            break;
          }
        }
      }
    );
  };
  const processQuestion7 = (value: string) => {
    if (value !== "") setMajor(value);
  };
  const processQuestion8 = (value: string) => {
    if (value !== "") setPoint(point);
  };
  const processQuestion9 = (value: string) => {
    if (value !== "") {
      const formatComma = value.replace(/,/g, "");
      DetectNumberService.getDetectNumber(formatComma).then((res) => {
        for (var i = 0; i < res.types.length; i++) {
          if (res.types[i] === 2) {
            for (var j = 0; j <= i; j++) {
              setPoint(point + Number(res.tokens[j]));
            }
          }
        }
      });
    }
  };
  const processQuestion10 = (value: string) => {
    if (value !== "") {
      const formatComma = value.replace(/,/g, "");
      DetectNumberService.getDetectNumber(formatComma).then((res) => {
        for (var i = 0; i < res.types.length; i++) {
          if (res.types[i] === 2) {
            for (var j = 0; j <= i; j++) {
              setPoint(point + Number(res.tokens[j]));
            }
          }
        }
      });
    }
  };

  useEffect(() => {
    switch (no) {
      case "1":
        if (!listening) processQuestion1(transcript);
        break;
      case "2":
        if (!listening) processQuestion2(transcript);
        break;
      case "3":
        if (!listening) processQuestion3(transcript);
        break;
      case "4":
        if (!listening) processQuestion4(transcript);
        break;
      case "5":
        if (!listening) processQuestion5(transcript);
        break;
      case "6":
        if (!listening) processQuestion6(transcript);
        break;
      case "7":
        if (!listening) processQuestion7(transcript);
        break;
      case "8":
        if (!listening) processQuestion8(transcript);
        break;
      case "9":
        if (!listening) processQuestion9(transcript);
        break;
      case "10":
        // todo ยืนยัน
        if (!listening) processQuestion10(transcript);
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transcript, no, listening]);

  return (
    <>
      <Form>
        <Form.Group className="mb-3 opacity-75">
          <FloatingLabel controlId="floatingTextarea2" label="">
            <Form.Control
              value={transcript}
              as="textarea"
              readOnly
              placeholder="Leave a comment here"
              style={{ height: "100px" }}
            />
          </FloatingLabel>
        </Form.Group>
      </Form>
    </>
  );
}
