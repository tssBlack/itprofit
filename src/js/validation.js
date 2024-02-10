import { sendRequest } from "./sendRequest";

export async function validation(e) {
  e.preventDefault();

  let fields = {
    status: "error",
    fields: {},
  };
  JSON.stringify(fields);

  let form = document.getElementById("feedBackForm");
  let inputs = Array.from(form.querySelectorAll("input"));

  inputs.forEach((i) => {
    if (i.value.trim()) {
      i.nextElementSibling.classList.remove("error");
      i.classList.remove("invalid");
      i.classList.add("valid");
      if (i.type === "email") {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(i.value)) {
          i.classList.remove("valid");
          i.classList.add("invalid");
          i.nextElementSibling.classList.add("error");
          fields.fields[i.name] = i.nextElementSibling.textContent;
        }
      }
    } else {
      i.classList.remove("valid");
      i.classList.add("invalid");
      i.nextElementSibling.classList.add("error");
      fields.fields[i.name] = i.nextElementSibling.textContent;
    }
  });

  let textarea = form.querySelector("textarea");
  if (textarea.value.trim()) {
    textarea.classList.add("valid");
    textarea.classList.remove("invalid");
    textarea.nextElementSibling.classList.remove("error");
  } else {
    textarea.classList.remove("valid");
    textarea.classList.add("invalid");
    textarea.nextElementSibling.classList.add("error");
    fields.fields[textarea.name] = textarea.nextElementSibling.textContent;
  }

  const formData = new FormData(form);
  try {
    const response = await sendRequest(
      "http://localhost:9090/api/registration",
      "POST",
      formData
    );
    if (response && response.status === "success") {
      fields.status = response.status;
      fields["msg"] = response.message;
      delete fields.fields;
      console.log(fields);
    } else {
      console.log(fields);
    }
  } catch (error) {
    console.error("Ошибка при выполнении запроса:", error);
  }
}
