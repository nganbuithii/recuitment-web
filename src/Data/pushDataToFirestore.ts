import { collection, addDoc } from "firebase/firestore";
import fakeData from "./FakeData.json";
import { db } from "../services/firebaseConfig";

const pushDataToFirestore = async () => {
    try {
        for (const subject of fakeData.subjects) {
            // Thêm mỗi môn thi vào collection "subjects"
            const subjectRef = await addDoc(collection(db, "subjects"), {
                id: subject.id,
                name: subject.name,
            });

            console.log(`Môn thi "${subject.name}" được tạo với ID: ${subjectRef.id}`);

            // Thêm câu hỏi vào subcollection "questions" trong từng môn thi
            for (const question of subject.questions) {
                await addDoc(collection(db, `subjects/${subjectRef.id}/questions`), {
                    id: question.id,
                    question: question.question,
                    options: question.options,
                    correctAnswer: question.correctAnswer,
                });
            }

            console.log(`Câu hỏi cho môn thi "${subject.name}" đã được thêm thành công.`);
        }
        console.log("Đẩy dữ liệu lên Firestore thành công!");
    } catch (error) {
        console.error("Lỗi khi đẩy dữ liệu lên Firestore: ", error);
    }
};

pushDataToFirestore();
