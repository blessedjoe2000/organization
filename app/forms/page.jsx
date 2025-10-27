"use client";

import { motion } from "framer-motion";
import { Container } from "@mui/system";
import Link from "next/link";

const forms = [
  {
    id: 1,
    title: "Membership Registration Form",
    description:
      "Join our community by completing this simple registration form.",
    link: "/files/UEO-REG-FORM.pdf",
  },
  {
    id: 2,
    title: "AAU Scholarship Form",
    description:
      "Apply for the UEO Ambrose Alli University Scholarship by completing this quick and easy form.",
    link: "/files/UEO-Scholarship-Application-Form.pdf",
  },
  {
    id: 3,
    title: "High School Scholarship Form",
    description:
      "Apply for the UEO High School Scholarship by completing this quick and easy form.",
    link: "/files/HIGH-SCHOOL-SCHOLARSHIP-FORM.pdf",
  },
];

function Forms() {
  return (
    <Container>
      <div className="min-h-screen  flex flex-col items-center px-4 py-12">
        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl text-center mb-10"
        >
          <h2 className="mb-3">Available Forms</h2>
          <p className="">
            Explore the list of available forms below. Click any form to open
            and download it.
          </p>
        </motion.div>

        {/* Forms list */}
        <div className="grid gap-6 w-full max-w-4xl sm:grid-cols-2">
          {forms.map((form) => (
            <motion.div
              key={form.id}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white shadow-md rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl font-semibold mb-2">{form.title}</h2>
                <p className="text-gray-600 text-sm">{form.description}</p>
              </div>

              <Link
                href={form.link}
                target="blank"
                className="mt-4 inline-block text-center bg-light-blue hover:bg-dark-blue text-white py-2.5 rounded-lg text-sm font-medium transition-all"
              >
                Open Form
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Forms;
