import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Editor from "./components/Editor";

export default function Home() {
  return (
    <>
      <div>
        <h1>Hey</h1>
        <Editor />
      </div>
    </>
  );
}
