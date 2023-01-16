import { Button, Input, TextArea } from "@/components/Shared";

export const ContactForm = () => {
  return (
    <div className="bg-white rounded-xl p-6 md:p-10">
      <form>
        <Input name="first_name" placeholder="First name (required)" required />
        <Input name="last_name" placeholder="Last name (required)" required />
        <Input name="company_name" placeholder="Company name (required)" required />
        <Input name="company" placeholder="Company (required)" required />
        <TextArea name="message" placeholder="Message (required)" rows={5} />
        <Button className="w-full mt-8 text-center justify-center">Submit</Button>
      </form>
    </div>
  );
};
