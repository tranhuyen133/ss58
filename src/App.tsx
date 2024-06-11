import axios from "axios";
import { useEffect } from "react";
import ListInforStudent from "./components/bt1-6/LisInforStudent";
import ListStudents from "./components/bt7-10/ListStudents";

export default function App() {
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8080/users")
  //     .then((res) => {
  //       console.log("Giá trị data", res.data);
  //     })
  //     .catch((error) => {
  //       console.error("Lỗi");
  //     });
  // }, []);

  useEffect(() => {
    const newUser = {
      name: "minh thu",
      address: "ha noi",
    };
    axios
      .post("http://localhost:8080/users", newUser)
      .then((res) => console.log("Data", res))
      .catch((error) => {
        console.error("Lỗi", error);
      });
  });

  // useEffect(() => {
  //   axios
  //     .delete("http://localhost:8080/users/2")
  //     .then((res) => console.log("Data", res))
  //     .catch((error) => {
  //       console.error("Lỗi", error);
  //     });
  // });

  // useEffect(() => {
  //   // PUT, PATCH dùng để cập nhật

  //   let updateUser = {
  //     name: "minh thu",
  //   };
  //   axios
  //     .put("http://localhost:8080/users/3", updateUser)
  //     .then((res) => console.log("Data", res))
  //     .catch((error) => {
  //       console.error("Lỗi", error);
  //     });
  // });

  // useEffect(() => {
  //   // PUT, PATCH dùng để cập nhật

  //   let updateUser = {
  //     name: "thu",
  //   };
  //   axios
  //     .patch("http://localhost:8080/users/4", updateUser)
  //     .then((res) => console.log("Data", res))
  //     .catch((error) => {
  //       console.error("Lỗi", error);
  //     });
  // });

  // useEffect(() => {
  //   // tìm kiếm theo tên có chứ h ở trong thuộc tính name

  //   axios
  //     .get("http://localhost:8080/users?name_like=h")
  //     .then((res) => console.log("Data", res))
  //     .catch((error) => {
  //       console.error("Lỗi", error);
  //     });
  // });

  // useEffect(() => {
  //   // tìm kiếm theo tên có chứ h ở trong thuộc tính name
  //   axios
  //     .get("http://localhost:8080/users?name_like=^H")
  //     .then((res) => console.log("Data", res.data))
  //     .catch((error) => {
  //       console.error("Lỗi", error);
  //     });
  // });
  // useEffect(() => {
  //   // Lấy bảng users ra sắp xếp theo chữ cái
  //   // Tăng dần: asc ()
  //   // Giảm dần: desc
  //   axios
  //     .get("http://localhost:8080/users?_sort=name&_order=asc")
  //     .then((res) => console.log("Data", res.data))
  //     .catch((error) => {
  //       console.error("Lỗi", error);
  //     });
  // });

  useEffect(() => {
    // Phân trang
    axios
      .get("http://localhost:8080/users?_page=1&_limit=3")
      .then((res) => console.log("Data", res.data))
      .catch((error) => {
        console.error("Lỗi", error);
      });
  });

  return (
    <div>
      <ListInforStudent></ListInforStudent>
      <ListStudents></ListStudents>
    </div>
  );
}
