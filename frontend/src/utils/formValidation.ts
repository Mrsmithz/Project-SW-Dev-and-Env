export const validationTitleMessage = (title: string) => {
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

export const validationTitle = (title: string) => {
    if (title.length < 4) {
        return false;
    }
    else if (title.length > 40) {
        return false;
    }
    else {
        return true;
    }
}