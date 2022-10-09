const scores = {
  생활속의회계: "C",
  논리적글쓰기: "B",
  독일문화의이해: "B+",
  기초수학: "D+",
  영어회화: "C+",
  인지발달심리학: "A+",
};
const requiredClasses = ["영어회화", "기초수학", "공학수학", "컴퓨터과학개론"];

const getExamResult = (scores, requiredClasses) => {
  for (let subject in scores) {
    const grade = scores[subject];
    for (let i = 0; i < requiredClasses.length; i++) {
      if (subject !== requiredClasses[i]) {
        scores[requiredClasses[i]] = 0;
      }
    }
    if (grade === "A+") {
      grade = 4.5;
    } else if (grade === "A") {
      grade = 4;
    } else if (grade === "B+") {
      grade = 3.5;
    } else if (grade === "B") {
      grade = 3;
    } else if (grade === "C+") {
      grade = 2.5;
    } else if (grade === "C") {
      grade = 2;
    } else if (grade === "D+") {
      grade = 1.5;
    } else if (grade === "D") {
      grade = 1;
    } else if (grade === "F") {
      grade = 0;
    }
  }
  return scores;
};

getExamResult(scores, requiredClasses);
