import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  deleteField,
  updateDoc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../firebase/firebase.config";
import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import LoadingDots from "../loading/LoadingDots";


const Blog = () => {


  const [isLoading, setIsLoading] = useState(false)
  const [newsList, setNewsList] = useState([])

  const newsRef = collection(db, "news")



  const getNews = async () => {
    setIsLoading(true)
    const newsDocument = await getDocs(newsRef)
    const newsData = newsDocument.docs.map((doc) => doc.data())
    const newsId = newsDocument.docs.map((doc) => doc.id)
    const newsDataWithId = newsData.map((item, id) => {
      return {
        ...item,
        id: newsId[id],
      }
    })

    if (newsDataWithId.length > 0) {
      setNewsList(newsDataWithId);
      setIsLoading(false)
    }
  }

  useEffect(
    () => {
      getNews()
    }, []
  )

  if (isLoading) {
    return <LoadingDots/>
  }



  console.log(newsList)


  return (
      <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                <span className="block mb-2 text-lg font-semibold text-primary">
                  Our Blogs
                </span>
                <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                  Our Recent News
                </h2>
                <p className="text-base text-body-color">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap -mx-4">
            {newsList?.map((item, index) => {

              return (
                <div key={index} className="flex flex-1 w-[300px]">

                <BlogCard
                keyPost={index}
                  CardTitle={item.name}
                  CardDescription={item.description}
                  image={item.image}
                  linkPost={item.link}

                />
                </div>
              )
            })}

            //quote, slider, search hien modal

          </div>
        </div>
      </section>
  );
};

export default Blog;

