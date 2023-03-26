-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2023. Már 15. 19:51
-- Kiszolgáló verziója: 10.4.27-MariaDB
-- PHP verzió: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `heaven`
--
CREATE DATABASE IF NOT EXISTS `heaven` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_hungarian_ci;
USE `heaven`;
-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `booking`
--

CREATE TABLE `booking` (
  `booking_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `room_id` int(11) NOT NULL,
  `check_in` date NOT NULL,
  `check_out` date NOT NULL,
  `night_number` int(11) NOT NULL,
  `amount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `room`
--

CREATE TABLE `room` (
  `room_id` int(11) NOT NULL,
  `room_type_id` int(11) NOT NULL,
  `room_number` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `room`
--

INSERT INTO `room` (`room_id`, `room_type_id`, `room_number`) VALUES
(1, 1, 1),
(2, 2, 3),
(3, 3, 5),
(4, 4, 7),
(5, 5, 12),
(6, 6, 14);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `room_type`
--

CREATE TABLE `room_type` (
  `room_type_id` int(11) NOT NULL,
  `room_type_name` varchar(30) NOT NULL,
  `description` text NOT NULL,
  `space` int(1) NOT NULL,
  `price_night` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `room_type`
--

INSERT INTO `room_type` (`room_type_id`, `room_type_name`, `description`, `space`, `price_night`) VALUES
(1, 'superior egyágyas szoba', 'Kényelmes, 16 m2 alapterületű egyágyas szoba 1 fő részére. A fürdőszobában ülőkád található. Bekészítések: törölköző, hajszárító. A szoba ablakaiból a csodálatos nyíregyházi belváros látható. A szobában minibár is a vendégek rendelkezésére áll.', 1, 17000),
(2, 'standard kétágyas szoba', 'Minden igényt kielégítő 18 m2-es beltér, két különálló ággyal vagy franciaággyal. A szobában minibár és LCD Tv áll a vendégek rendelkezésére. A fürdőszobában kényelmes ülőkád található. Bekészítések: törölköző, hajszárító.', 2, 22000),
(3, 'superior kétágyas szoba', 'Kényelmes, tágas, 20 m2 alapterületű kétágyas vagy franciaágyas szoba 2 fő részére. A fürdőszobában ülőkád található. Bekészítések: törölköző, hajszárító. A szoba ablakaiból a csodálatos nyíregyházi belváros látható. A szobában minibár is a vendégek rendelkezésére áll.', 2, 25000),
(4, 'standard háromágyas szoba', 'Szállodánkban kétféle Standard típusú háromágyas szoba található. Az emeleti standard szobáink nagy belmagasságúak, 16m2-esek belső udvarra (parkolóra) néző szobák, félemeleti szobáink pedig​​ alacsony belmagasságúak 15m2-es családias jellegű könyvtárra és a parkolóra néző szobák.', 3, 25500),
(5, 'superior háromágyas szoba', 'Superior háromágyas szobaáink mérete 24m2\r\nKényelmes, tágas, 24 m2 alapterületű háromágyas szoba egy franciaággyal és egy külön ággyal 3 fő részére. A fürdőszobában kényelmes ülőkád található. Bekészítések: törölköző, hajszárító. A szoba ablakaiból a csodálatos nyíregyházi belváros látható. A szobában minibár is a vendégek rendelkezésére áll.', 3, 30000),
(6, 'standard négyágyas szoba', 'Két helyiségből álló családi szobánkat a családos vendégeink igényei szerint alakítottuk ki. Tágas 26 m2-es beltér, négy ággyal. A szobában minibár áll a vendégek rendelkezésére. A fürdőszobában kényelmes ülőkád található. Bekészítések: törölköző, hajszárító.', 4, 32000),
(7, 'superior négyágyas szoba', 'Elegáns stílusú, két helyiségből álló családi szobánkat különleges alkalmakhoz és a családos vendégeink igényei szerint alakítottuk ki. A hálószobában franciaágy, a nappaliban két egyszemélyes ágy (+2 fő részére), és LCD TV. A szobában minibár áll a vendégek rendelkezésére. A fürdőszobában kényelmes ülőkád valamint kétszemélyes mosdók találhatóak. Bekészítések: törölköző, hajszárító. Az ablakokból a nyíregyházi Kossuth tér panorámájában gyönyörködhet.', 4, 36000);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `address` varchar(255) NOT NULL,
  `phone_number` varchar(40) NOT NULL,
  `is_admin` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `user`
--

INSERT INTO `user` (`user_id`, `email`, `password`, `name`, `address`, `phone_number`, `is_admin`) VALUES
(3, 'vargatimi505@gmail.com', '$2a$12$xw0g4jPTz76QtKsx4zYAOeqW.dTrpEP3.wOGVZDjLtGL4.IgfweyK', 'Varga Tímea', '4481 Sóstóhegy, Nyírség utca 1.', '06302466287', 1),
(6, 'kisanna12@gmail.com', '$2a$12$J23sAyYvFAxnvltta1Ah1.rn91SHSLo0Lj6oM7fuUxmXw19tdPs4C', 'Kis Anna', '4400 Nyíregyháza, Kosbor utca 6.', '06704327644', 0);

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `booking`
--
ALTER TABLE `booking`
  ADD PRIMARY KEY (`booking_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `room_id` (`room_id`);

--
-- A tábla indexei `room`
--
ALTER TABLE `room`
  ADD PRIMARY KEY (`room_id`),
  ADD KEY `room_type_id` (`room_type_id`);

--
-- A tábla indexei `room_type`
--
ALTER TABLE `room_type`
  ADD PRIMARY KEY (`room_type_id`);

--
-- A tábla indexei `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `booking`
--
ALTER TABLE `booking`
  MODIFY `booking_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `room`
--
ALTER TABLE `room`
  MODIFY `room_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT a táblához `room_type`
--
ALTER TABLE `room_type`
  MODIFY `room_type_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT a táblához `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `booking`
--
ALTER TABLE `booking`
  ADD CONSTRAINT `booking_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  ADD CONSTRAINT `booking_ibfk_2` FOREIGN KEY (`room_id`) REFERENCES `room` (`room_id`);

--
-- Megkötések a táblához `room`
--
ALTER TABLE `room`
  ADD CONSTRAINT `room_ibfk_1` FOREIGN KEY (`room_type_id`) REFERENCES `room_type` (`room_type_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
