-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 19, 2024 at 08:14 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `latihan`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `profile_pic` varchar(255) NOT NULL,
  `verified_at` datetime NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `email`, `nama`, `profile_pic`, `verified_at`, `created_at`, `updated_at`) VALUES
('110845485514575093400', 'fadlananshari06@gmail.com', 'Fadlan Anshari', 'https://lh3.googleusercontent.com/a/ACg8ocLzajL3uEi57DYNQJ2dpGs4zXLPkMwQRKrC0WBWhMF0zrWu_DQ=s96-c', '2024-07-22 15:02:29', '2024-07-22 15:02:29', '2024-07-22 15:02:29');

-- --------------------------------------------------------

--
-- Table structure for table `galeri`
--

CREATE TABLE `galeri` (
  `id` int(255) NOT NULL,
  `id_paket` int(100) NOT NULL,
  `gambar` varchar(255) NOT NULL,
  `lokasi` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `galeri`
--

INSERT INTO `galeri` (`id`, `id_paket`, `gambar`, `lokasi`, `created_at`, `updated_at`) VALUES
(4, 666, '1722866412853-phinisi-labuan-bajo-budi-utama-cruise.jpg', 'public\\images\\1722866412853-phinisi-labuan-bajo-budi-utama-cruise.jpg', '2024-08-05 21:00:12', '2024-08-05 21:00:12'),
(5, 666, '1722866428798-Labuan-Bajo-Nusa-Tenggara-Timur-367138653.jpg', 'public\\images\\1722866428798-Labuan-Bajo-Nusa-Tenggara-Timur-367138653.jpg', '2024-08-05 21:00:28', '2024-08-05 21:00:28'),
(6, 666, '1722866438269-B900644-Mengenal-Wisata-Labuan-Bajo-1024x538.jpg', 'public\\images\\1722866438269-B900644-Mengenal-Wisata-Labuan-Bajo-1024x538.jpg', '2024-08-05 21:00:38', '2024-08-05 21:00:38'),
(10, 667, '1722868435368-7xm127460-1024x694.jpg', 'public\\images\\1722868435368-7xm127460-1024x694.jpg', '2024-08-05 21:33:55', '2024-08-05 21:33:55'),
(11, 667, '1722868446288-cassie-gallegos-i-VetqrMmNY-unsplash.jpg', 'public\\images\\1722868446288-cassie-gallegos-i-VetqrMmNY-unsplash.jpg', '2024-08-05 21:34:06', '2024-08-05 21:34:06'),
(12, 667, '1722868474522-best-hotel-bali.jpeg', 'public\\images\\1722868474522-best-hotel-bali.jpeg', '2024-08-05 21:34:34', '2024-08-05 21:34:34');

-- --------------------------------------------------------

--
-- Table structure for table `paket_wisata`
--

CREATE TABLE `paket_wisata` (
  `id` int(100) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `deskripsi` longtext NOT NULL,
  `foto` varchar(255) NOT NULL,
  `lokasi` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `paket_wisata`
--

INSERT INTO `paket_wisata` (`id`, `nama`, `deskripsi`, `foto`, `lokasi`, `created_at`, `updated_at`) VALUES
(666, 'Labuan Bajo', 'Labuan Bajo adalah permata di ujung barat Pulau Flores, yang dikenal sebagai gerbang menuju Taman Nasional Komodo. Destinasi ini menawarkan pengalaman yang luar biasa bagi para pencinta alam dan petualangan. Pulau-pulau di sekitar Labuan Bajo, seperti Pulau Komodo, Pulau Rinca, dan Pulau Padar, menjadi rumah bagi komodo, reptil terbesar di dunia. Pulau Padar, dengan pemandangan bukit-bukit hijau dan pantai berpasir putih, menawarkan salah satu panorama paling ikonik di Indonesia. Selain melihat komodo, wisatawan juga bisa menyelam dan snorkeling di perairan sekitar, yang terkenal dengan terumbu karang yang masih alami dan keanekaragaman hayati lautnya. Labuan Bajo juga menawarkan wisata sunset yang menakjubkan dari Bukit Amelia atau Bukit Sylvia, serta pengalaman menginap di resort-resort mewah dengan pemandangan laut yang menakjubkan. Kehangatan dan keramahan penduduk setempat menambah daya tarik Labuan Bajo sebagai destinasi wisata unggulan.', '1722425880028-alasan-ke-labuan-bajo.webp', 'NTT', '2024-07-25 20:33:30', '2024-08-13 21:39:16'),
(667, 'Bali', 'Wisata Bali: Surga Tropis yang Menawan\n\nBali, pulau yang dikenal dengan julukan \"Pulau Dewata,\" adalah destinasi wisata yang menawarkan keindahan alam dan kekayaan budaya yang tiada duanya. Terletak di tengah-tengah Indonesia, Bali dikenal dengan pantai-pantainya yang menakjubkan, gunung-gunung yang megah, serta sawah terasering yang hijau subur.\n\nPantai dan Laut\nBali memiliki beberapa pantai terindah di dunia, seperti Kuta, Seminyak, dan Nusa Dua. Pantai-pantai ini terkenal dengan pasir putihnya yang lembut dan air laut yang jernih, ideal untuk berenang, berselancar, atau hanya bersantai sambil menikmati matahari terbenam. Untuk suasana yang lebih tenang, Anda bisa mengunjungi Pantai Jimbaran yang terkenal dengan seafood segarnya.\n\nBudaya dan Sejarah\nKunjungi Ubud untuk merasakan suasana budaya Bali yang otentik. Di sini Anda akan menemukan pasar seni, galeri, dan pura-pura kuno yang menawarkan wawasan mendalam tentang seni dan tradisi Bali. Pura Tanah Lot, yang terletak di atas batu karang di tepi laut, adalah salah satu situs suci yang paling terkenal dan menawarkan pemandangan matahari terbenam yang spektakuler.\n\nPetualangan Alam\nBagi pecinta alam, Bali menawarkan berbagai kegiatan outdoor seperti hiking di Gunung Batur untuk menikmati matahari terbit, atau menjelajahi hutan monyet di Ubud. Anda juga bisa menikmati snorkeling atau menyelam di Nusa Penida, yang terkenal dengan keanekaragaman hayati bawah lautnya.\n\nKesenian dan Kuliner\nJangan lewatkan kesempatan untuk mencicipi kuliner khas Bali seperti Babi Guling, Bebek Betutu, dan lawar. Bali juga terkenal dengan seni pertunjukan tradisionalnya, seperti Tari Kecak dan Barong, yang mempersembahkan kisah-kisah epik dan mitos lokal dengan warna-warni yang menakjubkan.\n\nPengalaman Spa dan Relaksasi\nBali juga dikenal sebagai tujuan spa dan wellness yang terkenal. Nikmati berbagai perawatan relaksasi di spa-spa mewah yang tersebar di seluruh pulau, dari pijat tradisional Bali hingga perawatan tubuh yang menenangkan.\n\nDengan segala keindahan dan keragaman yang ditawarkan, Bali adalah tempat yang cocok untuk semua jenis wisatawan. Apakah Anda mencari petualangan, relaksasi, atau eksplorasi budaya, Bali memiliki sesuatu untuk ditawarkan.', '1722425531143-GettyImages-1145042281.jpeg', 'Denpasar', '2024-07-25 21:59:00', '2024-08-07 16:49:09'),
(670, 'Raja Ampat', '\nRaja Ampat, terletak di barat Papua, Indonesia, adalah destinasi tropis yang menawarkan keindahan alam yang menakjubkan. Kepulauan ini, yang terdiri dari sekitar 1.500 pulau kecil di Laut Arafura, terkenal dengan keindahan bawah lautnya yang spektakuler. Terumbu karang yang memukau dan keanekaragaman hayati laut, termasuk berbagai spesies ikan dan penyu, menjadikannya salah satu lokasi snorkeling dan menyelam terbaik di dunia. Pantai-pantai seperti di Pulau Wayag dan Pulau Pianemo, dengan pasir putih halus dan formasi karang dramatis, menawarkan pemandangan yang mempesona. Raja Ampat juga menyediakan berbagai aktivitas petualangan, seperti trekking ke puncak-puncak bukit yang memberikan panorama pulau-pulau kecil dan laguna yang menakjubkan. Selain keindahan alamnya, pulau ini kaya akan budaya lokal, dengan kesempatan untuk berinteraksi dengan masyarakat Suku Papua melalui festival dan upacara adat. Akomodasi yang bervariasi, dari resort mewah hingga penginapan sederhana, menawarkan pengalaman yang nyaman dan menyatu dengan alam. Raja Ampat adalah destinasi impian bagi pelancong yang mencari pengalaman wisata yang unik, mempesona, dan tak terlupakan.', '1723114156381-pulau-misool.webp', 'Papua Barat', '2024-07-30 17:19:58', '2024-08-08 21:05:21'),
(671, 'Lombok', 'Lombok adalah pulau yang menawarkan kombinasi sempurna antara keindahan alam dan budaya. Dengan pantai-pantai yang masih alami, seperti Pantai Kuta, Pantai Senggigi, dan Pantai Tanjung Aan, Lombok adalah surga bagi para pencinta pantai dan selancar. Gunung Rinjani, gunung berapi tertinggi kedua di Indonesia, menarik para pendaki dari seluruh dunia dengan pemandangan spektakuler dan Danau Segara Anak yang memukau. Selain itu, pulau-pulau kecil di sekitarnya, seperti Gili Trawangan, Gili Meno, dan Gili Air, menawarkan pengalaman menyelam dan snorkeling yang luar biasa, dengan terumbu karang yang indah dan kehidupan laut yang kaya.', '1722425647893-pulau-di-lombok-yang-wajib-dikunjungi-qgi0qg3mcxn469h0wsst8p46qy2760obcvvzes8jc4.webp', 'NTB', '2024-07-30 17:21:12', '2024-08-13 21:35:22'),
(672, 'Flores', 'Flores adalah pulau yang kaya akan keajaiban alam dan budaya. Taman Nasional Komodo, rumah bagi komodo, reptil purba terbesar di dunia, adalah destinasi yang wajib dikunjungi. Labuan Bajo, sebagai pintu gerbang ke Komodo, juga menawarkan pemandangan pantai yang mempesona dan spot menyelam kelas dunia. Selain itu, Danau Kelimutu, yang terkenal dengan danau tiga warnanya, adalah salah satu fenomena alam paling unik di Indonesia. Desa-desa tradisional seperti Bena di Bajawa memberikan wawasan tentang kehidupan dan kebudayaan asli Flores, sementara pemandangan sawah terasering dan pegunungan di sekitar pulau menambah pesona alam Flores.', '1722425824468-Pulau-Sebayur.jpg', 'NTT', '2024-07-30 17:21:18', '2024-08-13 21:35:36'),
(673, 'Yogyakarta', 'Yogyakarta adalah jantung budaya Jawa, penuh dengan warisan sejarah dan seni. Kota ini terkenal dengan Keraton Yogyakarta, istana yang masih menjadi tempat tinggal Sultan dan pusat kebudayaan Jawa. Tidak jauh dari kota, berdiri megah Candi Borobudur, candi Buddha terbesar di dunia, dan Candi Prambanan, kompleks candi Hindu yang memukau dengan arsitektur detailnya. Jalan Malioboro adalah pusat keramaian kota, penuh dengan pedagang kaki lima, toko-toko batik, dan kuliner khas Yogyakarta seperti gudeg. Yogyakarta juga dikenal dengan kesenian tradisional seperti wayang kulit dan batik, serta pemandangan alam seperti Pantai Parangtritis dan gua-gua di kawasan Gunungkidul.', '1723114290315-Spot-Pedestrian-Titik-Nol-Km-Jogja-sumber-ig-jogjagokil.jpg', 'D.I.Y', '2024-07-30 17:22:48', '2024-08-13 21:35:50'),
(675, 'Bandung', 'Bandung, yang sering disebut sebagai \"Paris van Java,\" adalah kota yang menawarkan perpaduan antara keindahan alam pegunungan dan pesona urban. Dikelilingi oleh perbukitan hijau dan perkebunan teh, Bandung memiliki iklim sejuk yang menarik wisatawan. Kawasan Lembang dan Ciwidey adalah destinasi populer untuk wisata alam, dengan tempat-tempat seperti Tangkuban Perahu, Kawah Putih, dan Ranca Upas. Bandung juga dikenal sebagai pusat belanja dengan banyak factory outlet dan distro yang menawarkan produk fashion berkualitas. Selain itu, Bandung adalah kota kuliner dengan berbagai pilihan makanan lezat, mulai dari makanan tradisional Sunda hingga jajanan modern.', '1723114712698-61a7081e7e370017d2698de1_gFQNYmztLSR9Vq88gV4U5VIfYXJbPEZMGCAKJjUpkDxWNkrmm95qiEXYuQXD44L3MPVhEl32ReVgbqcp6OWUtMetfXl7STesTnKZCO9RZfMthhLh7RupeB-yb7IMkmtWqPoTjAas.jpg', 'Jawa Barat', '2024-08-05 20:41:02', '2024-08-13 21:36:04'),
(676, 'Malang', 'Malang adalah kota yang terkenal dengan udaranya yang sejuk, arsitektur kolonial, dan pemandangan alam yang indah. Terletak di dataran tinggi, kota ini dikelilingi oleh pegunungan dan perkebunan apel yang menjadi ciri khasnya. Destinasi wisata seperti Jatim Park, Museum Angkut, dan Batu Night Spectacular menawarkan hiburan untuk semua kalangan. Bagi pecinta alam, Gunung Bromo yang terkenal dengan pemandangan matahari terbitnya dapat dijangkau dari Malang. Selain itu, Malang juga menawarkan wisata sejarah dengan berbagai bangunan kolonial dan candi-candi kuno seperti Candi Singosari.', '1723114918463-61c03a03c4068.jpg', 'Jawa Tengah', '2024-08-08 17:59:50', '2024-08-13 21:36:19'),
(677, 'Surabaya', 'Surabaya, sebagai kota terbesar kedua di Indonesia, adalah pusat ekonomi dan sejarah yang kaya. Kota ini dikenal dengan Monumen Kapal Selam dan Tugu Pahlawan yang memperingati pertempuran heroik dalam sejarah Indonesia. Surabaya juga memiliki banyak taman dan ruang hijau seperti Kebun Binatang Surabaya dan Taman Bungkul yang populer di kalangan warga lokal. Pecinan Surabaya, yang kaya akan budaya Tionghoa, menawarkan pengalaman kuliner yang unik dengan berbagai masakan khas. Selain itu, Surabaya adalah pintu gerbang menuju Pulau Madura dan Jembatan Suramadu yang menghubungkan kedua pulau tersebut.\n\n', '1723114927387-Spot Foto Surabaya.jpg', 'Jawa Timur', '2024-08-08 18:00:19', '2024-08-13 21:36:36'),
(678, 'Makassar', 'Makassar, ibu kota Provinsi Sulawesi Selatan, adalah kota pelabuhan yang kaya akan sejarah dan budaya maritim. Pantai Losari adalah landmark ikonik yang menjadi tempat berkumpulnya warga dan wisatawan untuk menikmati pemandangan matahari terbenam. Benteng Rotterdam, peninggalan kolonial Belanda, adalah saksi bisu sejarah panjang Makassar sebagai pusat perdagangan. Makassar juga dikenal dengan kuliner khasnya, seperti coto Makassar dan es pisang ijo. Tidak jauh dari kota, Pulau Samalona dan Pulau Kodingareng Keke menawarkan pengalaman snorkeling dan diving dengan terumbu karang yang menakjubkan.', '1723114952042-Wisata-Makassar-yang-Wajib-Dikunjungi-Sekali-Seumur-Hidup-Shutterstock-FB_2.jpg', 'Sulawesi Selatan', '2024-08-08 18:01:28', '2024-08-13 21:36:54'),
(679, 'Manado', 'Manado adalah pintu gerbang menuju keindahan alam bawah laut Sulawesi Utara. Taman Nasional Bunaken, yang terkenal di dunia sebagai salah satu lokasi menyelam terbaik, menawarkan keanekaragaman hayati laut yang luar biasa. Selain Bunaken, Manado juga dikenal dengan budaya dan keramahan masyarakatnya, serta kuliner khas seperti tinutuan (bubur Manado) dan seafood segar. Di daratan, wisatawan dapat menjelajahi Danau Tondano dan Gunung Lokon yang aktif, memberikan pemandangan spektakuler dan pengalaman petualangan yang tak terlupakan.', '1723115944461-kota-manado.jpg', 'Sulawesi Utara', '2024-08-08 18:05:00', '2024-08-13 21:37:09'),
(680, 'Semarang', 'Semarang, ibu kota Jawa Tengah, adalah kota yang kaya akan sejarah dan arsitektur kolonial. Kota Lama Semarang, dengan bangunan-bangunan tua seperti Gereja Blenduk, menawarkan suasana khas Eropa di tengah Indonesia. Lawang Sewu, bangunan bersejarah yang terkenal dengan seribu pintunya, juga menjadi daya tarik wisata yang penuh misteri. Selain itu, Semarang adalah kota yang beragam secara budaya, dengan komunitas Tionghoa yang kuat yang dapat ditemukan di kawasan Pecinan, di mana wisatawan bisa mencicipi berbagai hidangan khas seperti lumpia Semarang. Pantai Marina dan kawasan perbukitan di sekitar Semarang menawarkan tempat untuk bersantai dan menikmati pemandangan alam yang indah.', '1723115364066-community-49ad9c208fc16164c8a9acce79341f93.jpg', 'Jawa Tengah', '2024-08-08 18:09:09', '2024-08-13 21:37:23'),
(682, 'Palembang', 'Palembang, ibu kota Sumatera Selatan, adalah kota yang kaya akan sejarah, budaya, dan pesona alam. Dikenal sebagai salah satu kota tertua di Indonesia, Palembang menawarkan berbagai destinasi wisata yang menarik dan penuh makna.\n\nSalah satu ikon paling terkenal di Palembang adalah Jembatan Ampera, yang membentang megah di atas Sungai Musi. Jembatan ini tidak hanya menjadi simbol kota, tetapi juga menghubungkan dua bagian utama Palembang. Menyusuri Sungai Musi dengan perahu tradisional, pengunjung dapat menikmati pemandangan indah kota dan mampir ke Pulau Kemaro, sebuah pulau kecil yang menyimpan legenda cinta abadi. Di Pulau Kemaro, terdapat pagoda sembilan lantai dan kelenteng yang sering menjadi pusat perayaan Cap Go Meh.\n\nBagi pecinta sejarah, Museum Sultan Mahmud Badaruddin II dan Benteng Kuto Besak adalah tempat yang wajib dikunjungi. Di sini, wisatawan dapat mempelajari sejarah Kesultanan Palembang dan melihat peninggalan-peninggalan bersejarah yang sangat berharga.\n\nSelain wisata sejarah, Palembang juga menawarkan wisata alam yang menakjubkan. Air Terjun Lematang Indah di dekat Pagar Alam dan Gunung Dempo dengan hamparan kebun teh hijau yang menyejukkan adalah tempat yang sempurna untuk menikmati keindahan alam dan kesejukan udara pegunungan.\n\nJangan lewatkan pula wisata kuliner khas Palembang seperti pempek, tekwan, dan model yang menggugah selera. Kunjungan ke Palembang tidak akan lengkap tanpa mencicipi kelezatan hidangan-hidangan ini yang kaya akan cita rasa.\n\nDengan kombinasi yang memikat antara sejarah, budaya, alam, dan kuliner, Palembang menawarkan pengalaman wisata yang tak terlupakan bagi setiap pengunjung.', '1723115614701-008fa72eccb6a31aa5fbf7e7309bc33f-scaled.jpg', 'Sumatera Selatan', '2024-08-08 18:13:17', '2024-08-08 20:56:46');

-- --------------------------------------------------------

--
-- Table structure for table `reservasi`
--

CREATE TABLE `reservasi` (
  `id` int(255) NOT NULL,
  `id_paket` int(255) NOT NULL,
  `id_user` varchar(255) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `tujuan` varchar(255) NOT NULL,
  `no_telp` varchar(255) NOT NULL,
  `jml_peserta` int(255) NOT NULL,
  `waktu_perjalanan` int(255) NOT NULL,
  `penginapan` tinyint(1) NOT NULL,
  `transportasi` tinyint(1) NOT NULL,
  `makanan` tinyint(1) NOT NULL,
  `harga` varchar(255) NOT NULL,
  `jml_tagihan` varchar(255) NOT NULL,
  `bukti_bayar` varchar(255) NOT NULL,
  `sudah_bayar` tinyint(1) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `reservasi`
--

INSERT INTO `reservasi` (`id`, `id_paket`, `id_user`, `nama`, `tujuan`, `no_telp`, `jml_peserta`, `waktu_perjalanan`, `penginapan`, `transportasi`, `makanan`, `harga`, `jml_tagihan`, `bukti_bayar`, `sudah_bayar`, `created_at`, `updated_at`) VALUES
(31, 682, '110845485514575093400', 'fadlan', 'Palembang', '08123456789', 2, 3, 1, 1, 0, 'Rp 2.200.000', 'Rp 13.200.000', '', 0, '2024-08-14 01:19:02', '2024-08-14 16:41:37');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `nama` varchar(225) NOT NULL,
  `profile_pic` varchar(225) NOT NULL,
  `verified_at` datetime NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `nama`, `profile_pic`, `verified_at`, `created_at`, `updated_at`) VALUES
('110845485514575093400', 'fadlananshari06@gmail.com', 'Fadlan Anshari', 'https://lh3.googleusercontent.com/a/ACg8ocLzajL3uEi57DYNQJ2dpGs4zXLPkMwQRKrC0WBWhMF0zrWu_DQ=s96-c', '2024-08-09 11:43:37', '2024-08-09 11:43:37', '2024-08-09 11:43:37'),
('116870555950169880593', 'dilaadilah345@gmail.com', 'Dila adilah', 'https://lh3.googleusercontent.com/a/ACg8ocJ-BMihD4bd_Y_V6m4p5GjUAPfOxQVtUkYRczo0n7J6eAA-WQ=s96-c', '2024-08-08 22:47:42', '2024-08-08 22:47:42', '2024-08-08 22:47:42');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `galeri`
--
ALTER TABLE `galeri`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `paket_wisata`
--
ALTER TABLE `paket_wisata`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reservasi`
--
ALTER TABLE `reservasi`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `galeri`
--
ALTER TABLE `galeri`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `paket_wisata`
--
ALTER TABLE `paket_wisata`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=683;

--
-- AUTO_INCREMENT for table `reservasi`
--
ALTER TABLE `reservasi`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
