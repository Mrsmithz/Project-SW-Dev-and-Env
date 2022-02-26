import { render, screen } from "@testing-library/react";
import CreatePost from "../../pages/createpost/index";
import Fab from "../../components/createpost/Fab";
import CreatePostForm from "../../components/createpost/CreatePostForm";
import UploadFile from "../../components/createpost/UploadFile";
import TaskProgress from "../../components/createpost/TaskProgress";
import "@testing-library/jest-dom";
import { Icon } from "@chakra-ui/react";
import { MdDescription, MdEdit, MdVerified } from "react-icons/md";

const tasks = [
  {
    taskName: "Upload File",
    icon: <Icon as={MdDescription} />,
  },
  {
    taskName: "Fill Information",
    icon: <Icon as={MdEdit} />,
  },
  {
    taskName: "Confirm",
    icon: <Icon as={MdVerified} />,
  },
];

describe("Create Post Page", () => {
  it("render create post page", () => {
    render(<CreatePost />);
    const textTitle = screen.getByText(/สร้างโพสต์ใหม่/i);
    expect(textTitle).toBeInTheDocument();
  });

  it("render fab", () => {
    render(<Fab />);
  });

  it("render create post form", () => {
    render(<CreatePostForm toNextPage={() => {}} backPage={() => {}} />);
  });
  it("render preview post", () => {
    //
  });

  it("render task progress state 1", () => {
    render(<TaskProgress tasks={tasks} state={1} />);
  });

  it("render task progress state 2", () => {
    render(<TaskProgress tasks={tasks} state={2} />);
  });

  it("render task progress state 3", () => {
    render(<TaskProgress tasks={tasks} state={3} />);
  });

  it("render upload file", () => {
    render(<UploadFile toNextPage={() => {}} file={null} setFile={() => {}} />);
  });
});
