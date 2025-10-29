"use client";

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { getNewsById, getRelatedNews } from "../../services/newsApi";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const NewsDetail = () => {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const detail = await getNewsById(id);
      const relatedData = await getRelatedNews(parseInt(id));
      setNews(detail);
      setRelated(relatedData);
      window.scrollTo(0, 0);
    };
    fetchData();
  }, [id]);

  if (!news) return <p className="text-center my-5">Loading...</p>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Container className="my-5 py-4">
        {/* Title */}
        <motion.h1
          className="fw-bold mb-3"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          {news.title}
        </motion.h1>

        {/* Date */}
        <motion.p
          className="text-muted mb-4"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          {news.date}
        </motion.p>

        {/* Image */}
        <motion.img
          src={news.image}
          alt={news.title}
          className="w-100 rounded-3 mb-4"
          style={{ maxHeight: "400px", objectFit: "cover" }}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
        />

        {/* Content */}
        <motion.div
          className="mb-5"
          dangerouslySetInnerHTML={{ __html: news.content }}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
        />

        {/* Related news */}
        <motion.h3
          className="fw-bold mt-5 mb-3"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
        >
          Gerelateerd nieuws
        </motion.h3>

        <Row>
          {related.map((item, i) => (
            <Col md={4} key={item.id} className="mb-4">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={5 + i}
              >
                <Card className="border-0 shadow-sm hover:shadow-lg transition">
                  <div className="position-relative">
                    <Card.Img
                      variant="top"
                      src={item.image}
                      alt={item.title}
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <span
                      className="position-absolute top-0 start-0 px-2 py-1 text-white fw-semibold"
                      style={{
                        backgroundColor: "red",
                        fontSize: "0.75rem",
                      }}
                    >
                      NIEUWSBERICHT
                    </span>
                  </div>
                  <Card.Body>
                    <Card.Title className="fw-semibold">
                      <Link
                        to={`/news/${item.id}`}
                        className="text-decoration-none text-dark"
                      >
                        {item.title}
                      </Link>
                    </Card.Title>
                    <Card.Text
                      className="text-muted"
                      style={{ fontSize: "0.85rem" }}
                    >
                      {item.date}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </motion.div>
  );
};

export default NewsDetail;
