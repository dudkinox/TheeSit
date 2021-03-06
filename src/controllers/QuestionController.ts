import questionModel from "../models/questionModel";

export default function QuestionsList(major: string): questionModel[] {
  return [
    {
      no: "1",
      text: "สถานะครอบครัวผู้สัมภาษณ์เป็นอย่างไรครับ",
    },
    {
      no: "2",
      text: "ผู้สัมภาษณ์มีสัญชาติประเทศอะไรครับ",
    },
    {
      no: "3",
      text: "ผลการเรียนเกรดเฉลี่ยเท่าไหร่ครับ",
    },
    {
      no: "4",
      text: "เคยสำเร็จการศึกษาจากที่มหาลัยใดมาก่อนหรือไม่ครับ",
    },
    {
      no: "5",
      text: "ครอบครัวมีรายได้ 1 ปี ทั้งหมดเท่าไหร่ครับ",
    },
    {
      no: "6",
      text: "ผู้สัมภาษณ์ได้ทำงานพิเศษ หรือไม่ ถ้าใช่อธิบายเกี่ยวกับงานของผู้สัมภาษณ์ครับ",
    },
    {
      no: "7",
      text: "ผู้สัมภาษณ์เรียนอยู่สาขาอะไรครับ",
    },
    {
      no: "8",
      text: `ทำไมถึงเลือกมาเรียนสาขา ${major} ครับ`,
    },
    {
      no: "9",
      text: "ท่านเคยทำประโยชน์ต่อสังคม / สาธารณะ อะไรบ้าง รวมทั้งสิ้น กี่ ชั่วโมงครับ",
    },
    {
      no: "10",
      text: "ผู้สัมภาษณ์มีจำนวนกี่คนในครอบครัว",
    },
  ];
}
