export const createPostTitleValidation = (title: string) => {
    if (title.length < 4) {
        return "Your title is too short!!";
    }
    else if (title.length > 40) {
        return "Your title is too long!!";
    }
    else {
        return "";
    }
}