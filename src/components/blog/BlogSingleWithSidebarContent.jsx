import Image from "next/image";
import Link from "next/link";
import React from "react";
import SocialShare from "../utilities/SocialShare";
import BlogPostComments from "./BlogPostComments";
import BlogCommentForm from "../form/BlogCommentForm";
import SearchWidget from "../widgets/SearchWidget";
import RecentPostsWidget from "../widgets/RecentPostsWidget";
import CategoryWidget from "../widgets/CategoryWidget";
import GalleryWidget from "../widgets/GalleryWidget";
import ArchiveWidget from "../widgets/ArchiveWidget";
import FollowWidget from "../widgets/FollowWidget";
import TagsWidget from "../widgets/TagsWidget";
import team2Thumb from "@/assets/img/teams/2.jpg";

const BlogSingleWithSidebarContent = ({ blogInfo }) => {
  const { date, dateIcon, thumbFull, authorIcon, author } = blogInfo;

  return (
    <>
      <div className="blog-area single full-blog right-sidebar full-blog default-padding">
        <div className="container">
          <div className="blog-items">
            <div className="row">
              <div className="blog-content col-xl-8 col-lg-7 col-md-12 pr-35 pr-md-15 pl-md-15 pr-xs-15 pl-xs-15">
                <div className="blog-style-two item">
                  <div className="blog-item-box">
                    <div className="thumb">
                      <Link href="#">
                        <Image src={`/assets/img/blog/${thumbFull}`} alt="Ardian Rangga - Experiental Learning" width={1900} height={995} />
                      </Link>
                    </div>
                    <div className="info">
                      <div className="meta">
                        <ul>
                          <li>
                            <Link href="#">
                              <i className={dateIcon}></i> {date}
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className={authorIcon}></i> {author}
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <h1>Experiential Learning dalam Leadership: Strategi Efektif Mengembangkan Kompetensi Karyawan</h1>
                      <h2>
                        <br />
                        Mengapa Leadership Development Program Penting di Era Disrupsi?
                      </h2>
                      <p>
                        Di tengah perubahan cepat akibat digitalisasi, AI, dan globalisasi, perusahaan dituntut memiliki pemimpin yang adaptif, inovatif, dan mampu memimpin perubahan. Namun, banyak organisasi menghadapi kesenjangan
                        kepemimpinan (leadership gap)—di mana kebutuhan akan pemimpin jauh lebih besar dibanding ketersediaannya.
                      </p>
                      <p>
                        Inilah alasan mengapa Leadership Development Program (LDP) menjadi strategi penting yang diterapkan hampir semua perusahaan besar, baik Tier 1 maupun Tier 2. Program ini bukan hanya melatih keterampilan manajerial,
                        tetapi juga membentuk mindset kepemimpinan yang mampu membawa organisasi ke arah yang lebih maju.
                      </p>
                      {/* <blockquote>Celebrated share of first to worse. Weddings and any opinions suitable smallest nay. Houses or months settle remove ladies appear. Engrossed suffering supposing he recommend do eagerness.</blockquote> */}
                      <h3>Tantangan Perusahaan dalam Mengembangkan Pemimpin Masa Depan</h3>
                      <ul type="1">
                        <li>
                          <b>Kesenjangan Generasi</b> – hadirnya Gen Z dan Millennial di dunia kerja menciptakan dinamika baru.
                        </li>
                        <li>
                          <b>Kompleksitas Bisnis</b> – perusahaan beroperasi di lingkungan global dengan regulasi dan persaingan ketat.
                        </li>
                        <li>
                          <b>Perubahan Teknologi</b> – pemimpin harus mampu mengadopsi teknologi baru dengan cepat.
                        </li>
                        <li>
                          <b>Kebutuhan Agile Leadership</b> – organisasi menuntut pemimpin yang gesit dan responsif.
                        </li>
                      </ul>
                      <h3>Peran Experiential Learning dalam Transformasi Kepemimpinan</h3>
                      <p>
                        Banyak studi menunjukkan bahwa <b>70% efektivitas pembelajaran kepemimpinan berasal dari pengalaman langsung (on-the-job learning)</b>, bukan dari ruang kelas semata. Inilah yang membuat <b>Experiential Learning</b>{" "}
                        menjadi inti dari Leadership Development Program modern.
                      </p>
                      <h2>Apa Itu Experiential Learning dalam Konteks Leadership?</h2>
                      <h3>Definisi dan Prinsip Experiential Learning</h3>
                      <p>
                        Experiential Learning adalah metode pembelajaran yang menekankan pada <b>belajar dari pengalaman nyata</b>. Konsep ini pertama kali dipopulerkan oleh David Kolb, yang menyatakan bahwa{" "}
                        <b>belajar paling efektif terjadi ketika seseorang terlibat langsung dalam proses, merefleksikan pengalaman, lalu mengaplikasikan kembali pengetahuan tersebut.</b>
                      </p>
                      <h3>Model Experiential Learning (Kolb’s Learning Cycle)</h3>
                      <ul>
                        <li>Concrete Experience (Pengalaman Nyata)</li>
                        <li>Reflective Observation (Refleksi)</li>
                        <li>Abstract Conceptualization (Pemahaman Teori)</li>
                        <li>Active Experimentation (Uji Coba Kembali)</li>
                      </ul>
                      <h3>Mengapa Experiential Learning Lebih Efektif daripada Training Konvensional</h3>
                      <ul>
                        <li>Memberikan praktik nyata, bukan hanya teori.</li>
                        <li>Meningkatkan retensi pengetahuan hingga 75%.</li>
                        <li>Membentuk soft skills kepemimpinan yang sulit diajarkan dengan metode ceramah.</li>
                        <li>Mendorong perubahan perilaku yang berkelanjutan.</li>
                      </ul>
                      <h2>Kompetensi Leadership yang Dibutuhkan di Perusahaan Modern</h2>
                      <h3>Strategic Thinking dan Decision Making</h3>
                      <p>Pemimpin masa kini harus mampu melihat gambaran besar sekaligus mengambil keputusan tepat di tengah ketidakpastian.</p>
                      <h3>Communication & Influence</h3>
                      <p>Keterampilan komunikasi persuasif menjadi kunci dalam membangun pengaruh dan menggerakkan tim.</p>
                      <h3>Collaboration & People Management</h3>
                      <p>Kolaborasi lintas tim dan kemampuan mengelola orang dengan empati menjadi keterampilan vital.</p>
                      <h3>Adaptability & Innovation Leadership</h3>
                      <p>Pemimpin yang inovatif mampu mendorong timnya untuk beradaptasi, mencoba hal baru, dan berinovasi.</p>
                      <h2>Bagaimana LEADFORWARD TRANSFORMATION Menggabungkan Experiential Learning dalam Program Leadership</h2>
                      <h3>Learning by Doing: Simulasi & Role Play</h3>
                      <p>
                        Peserta dilibatkan dalam simulasi nyata seperti <b>business war games, role play negosiasi, hingga crisis management simulation.</b>
                      </p>
                      <h3>Action Learning Project di Dunia Nyata</h3>
                      <p>Setiap peserta menjalani proyek nyata di organisasi, dengan fokus menyelesaikan masalah bisnis sekaligus belajar kepemimpinan.</p>
                      <h3>Mentoring, Coaching, dan Feedback 360°</h3>
                      <p>Peserta mendapatkan bimbingan dari senior leader serta umpan balik menyeluruh untuk mempercepat pertumbuhan.</p>
                      <h2>Studi Kasus: Leadership Development Program di Perusahaan</h2>
                      <h3>Praktik di Multinasional Company</h3>
                      <p>
                        Banyak perusahaan multinasional seperti <b>Unilever, General Electric, dan IBM</b> dikenal dengan program <b>Global Leadership Development Program (GLDP)</b> mereka.
                      </p>
                      <ul>
                        <li>Peserta diputar ke berbagai fungsi bisnis (finance, HR, marketing, operations).</li>
                        <li>
                          Menggunakan <b>action learning project</b> untuk memecahkan tantangan global.
                        </li>
                        <li>
                          Fokus pada <b>future leaders pipeline</b>, bukan hanya skill jangka pendek.
                        </li>
                      </ul>
                      <h3>Praktik di Perusahaan Nasional dan Fast-Growing Startup</h3>
                      <p>
                        Di Indonesia, perusahaan BUMN besar maupun startup unicorn seperti <b>Telkom Indonesia, Bank Mandiri, dan Gojek</b> juga mengembangkan program serupa.
                      </p>
                      <ul>
                        <li>
                          Pendekatan <b>Experiential Learning</b> digunakan untuk mempercepat adaptasi generasi muda menjadi pemimpin.
                        </li>
                        <li>Program leadership disesuaikan dengan budaya lokal dan tantangan spesifik industri.</li>
                        <li>
                          Startup cenderung menggunakan metode <b>mentoring dan agile leadership workshop</b>.
                        </li>
                      </ul>
                      <h2>Manfaat Experiential Learning dalam Leadership Development Program</h2>
                      <h3>Perubahan Perilaku dan Mindset Pemimpin</h3>
                      <p>
                        Peserta tidak hanya belajar teori, tetapi juga membangun <b>habit of leadership</b> seperti pengambilan keputusan cepat, komunikasi efektif, dan pengelolaan konflik.
                      </p>

                      <h3>Peningkatan Engagement dan Retensi Karyawan</h3>
                      <p>
                        Studi Gallup menunjukkan bahwa karyawan yang mendapat pelatihan kepemimpinan berbasis pengalaman <b>3x lebih engaged</b> dibanding yang tidak. Hal ini berdampak pada loyalitas dan retensi talenta.
                      </p>
                      <h3>Dampak Positif pada Kinerja Bisnis</h3>
                      <p>
                        Ketika pemimpin berkembang, organisasi ikut tumbuh. Perusahaan dengan program LDP yang kuat mencatat <b>kenaikan produktivitas hingga 25%</b> dan <b>penurunan turnover lebih dari 30%</b>.
                      </p>
                      <h2>Bagaimana Memulai Program LEADFORWARD TRANSFORMATION di Perusahaan Anda</h2>
                      <h3>Tahapan Implementasi Program</h3>
                      <p>
                        1. Assessment Kebutuhan – memetakan kompetensi leadership saat ini. <br />
                        2. Perancangan Program – modul dirancang berbasis experiential learning. <br />
                        3. Pelaksanaan Program – kombinasi workshop, simulasi, project, dan mentoring. <br />
                        4. Evaluasi & Feedback – pengukuran perubahan perilaku dan dampak bisnis.
                      </p>
                      <h3>Durasi, Modul, dan Metode Pembelajaran</h3>
                      <ul>
                        <li>Durasi: 3 – 12 bulan sesuai level peserta.</li>
                        <li>Modul: Strategic leadership, communication, innovation, people management.</li>
                        <li>Metode: Simulation-based, project assignment, coaching, reflection.</li>
                      </ul>
                      <h3>Customization sesuai Kebutuhan Organisasi</h3>
                      <p>LEADFORWARD TRANSFORMATION dapat disesuaikan untuk:</p>
                      <ul>
                        <li>
                          <b>Emerging Leaders</b> → supervisor / first-time managers.
                        </li>
                        <li>
                          <b>Mid-Level Leaders</b> → manajer yang siap naik ke level senior.
                        </li>
                        <li>
                          <b>Senior Leaders</b> → executive development program.
                        </li>
                      </ul>
                      <h2>Pertanyaan Umum (FAQ) tentang Experiential Learning dan Leadership</h2>
                      <p>
                        1. Apa bedanya Experiential Learning dengan training biasa? <br />
                        Training biasa lebih banyak teori, sedangkan experiential learning fokus pada pengalaman nyata, refleksi, dan penerapan langsung. <br />
                        2. Berapa lama biasanya <br />
                        Leadership Development Program berlangsung? Bervariasi, mulai dari 3 bulan (fast-track program) hingga 12–18 bulan untuk program komprehensif. <br />
                        3. Apakah Experiential Learning cocok untuk semua level karyawan? <br />
                        Ya, namun desainnya berbeda. Untuk emerging leaders lebih banyak simulasi, sementara untuk senior leaders lebih banyak project nyata dan coaching. <br />
                        4. Bagaimana cara mengukur keberhasilan program LEADFORWARD TRANSFORMATION? Dengan 360-degree feedback, pre-post assessment, dan KPI bisnis yang relevan. <br />
                        5. Apa manfaat langsung bagi perusahaan yang mengikuti program ini? <br />
                        Perusahaan mendapatkan pipeline pemimpin masa depan, peningkatan kinerja, dan engagement karyawan. <br />
                        6. Apakah program LEADFORWARD TRANSFORMATION bisa dilakukan secara hybrid? <br />
                        Ya, bisa dilakukan secara onsite, online, atau hybrid sesuai kebutuhan organisasi.
                      </p>
                      <h2>Kesimpulan: Membangun Pemimpin Masa Depan dengan LEADFORWARD TRANSFORMATION</h2>
                      <p>
                        Di era disrupsi, Experiential Learning terbukti sebagai pendekatan paling efektif untuk mengembangkan Leadership Competency karyawan. Perusahaan besar, baik nasional maupun multinasional, sudah menjadikan Leadership
                        Development Program sebagai strategi utama untuk memastikan keberlanjutan bisnis.
                      </p>
                      <p>Melalui LEADFORWARD TRANSFORMATION, organisasi Anda dapat membangun pemimpin yang:</p>
                      <ul>
                        <li>Adaptif dan visioner</li>
                        <li>Mampu beradaptasi ditengah ketidakpastian</li>
                        <li>Memberikan dampak positif bagi kinerja bisnis</li>
                      </ul>
                      <p>
                        🚀 Saatnya membawa organisasi Anda selangkah lebih maju dengan membekali karyawan melalui Experiential Learning berbasis Leadership Development Program.
                      </p>
                    </div>
                  </div>
                </div>
                {/* <div className="post-author">
                                    <div className="thumb">
                                        <Image src={team2Thumb} alt="Thumb" width={1900} height={995} />
                                    </div>
                                    <div className="info">
                                        <h4><a href="#">Md Sohag</a></h4>
                                        <p>
                                            Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion consectetur elit. Vesti at bulum nec at odio aea the dumm ipsumm ipsum that dolocons rsus mal suada and fadolorit to the consectetur elit. All the Lorem Ipsum generators on the Internet tend. Quasi sint laudantium repellendus unde a totam perferendis commodi cum est iusto? Minima, laborum.
                                        </p>
                                    </div>
                                </div> */}
                <div className="post-tags share">
                  <div className="tags">
                    <h4>Tags: </h4>
                    <a href="#">Experiental Learning</a>
                    <a href="$">transformation</a>
                  </div>

                  <div className="social">
                    <h4>Share:</h4>
                    <ul>
                      <SocialShare />
                    </ul>
                  </div>
                </div>
                {/* <div className="post-pagi-area">
                                    <div className="post-previous">
                                        <Link href="#">
                                            <div className="icon"><i className="fas fa-angle-double-left"></i></div>
                                            <div className="nav-title"> Previus Post <h5>Discovery incommode</h5></div>
                                        </Link>
                                    </div>
                                    <div className="post-next">
                                        <Link href="#">
                                            <div className="nav-title">Next Post <h5>Discovery incommode</h5></div>
                                            <div className="icon"><i className="fas fa-angle-double-right"></i></div>
                                        </Link>
                                    </div>
                                </div> */}
                {/* <div className="blog-comments">
                                    <div className="comments-area">
                                        <div className="comments-title">
                                            <h3>3 Comments On “Providing Top Quality Cleaning Related Services Charms.”</h3>
                                            <BlogPostComments />
                                        </div>
                                        <div className="comments-form">
                                            <div className="title">
                                                <h3>Leave a comments</h3>
                                            </div>
                                            <BlogCommentForm />
                                        </div>
                                    </div>
                                </div> */}
              </div>

              {/* <div className="sidebar col-xl-4 col-lg-5 col-md-12 mt-md-50 mt-xs-50">
                                <aside>
                                    <SearchWidget />
                                    <RecentPostsWidget />
                                    <CategoryWidget />
                                    <GalleryWidget />
                                    <ArchiveWidget />
                                    <FollowWidget />
                                    <TagsWidget />
                                </aside>
                            </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSingleWithSidebarContent;
