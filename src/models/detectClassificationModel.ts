export default interface detectClassificationModel {
  tags: tagsModel[];
}

interface tagsModel {
  score: number;
  tag: string;
}
