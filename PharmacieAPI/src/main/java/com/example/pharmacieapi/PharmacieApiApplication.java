package com.example.pharmacieapi;

import com.example.pharmacieapi.controllers.PharmacieDeGardeController;
import com.example.pharmacieapi.entity.*;
import com.example.pharmacieapi.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import java.text.ParseException;

@SpringBootApplication
public class PharmacieApiApplication implements Runnable {



	@Autowired
	PharmacieDeGardeController pharmacieDeGardeController;
	public static void main(String[] args) {
		SpringApplication.run(PharmacieApiApplication.class, args);
	}

	@Override
	public void run() {
		pharmacieDeGardeController = new PharmacieDeGardeController();
		try {
			for (PharmacieDeGarde p: pharmacieDeGardeController.getAllPharmaciesDeGardeByPharmacieId(2)
			) {
				System.out.println(p.getPharmacieDeGardePK().getPharmaciePK()+"");
			}
		} catch (ParseException e) {
		}
	}

	@Bean
	CommandLineRunner commandLineRunner(UserRepository userRepository , VilleRepository villeRepository , ZoneRepository zoneRepository, GardeRepository gardeRepository , PharmacieRepository pharmacieRepository ,PharmacieDeGardeRepository pharmacieDeGardeRepository) {
		return args -> {
			User user = new User();
			user.setEmail("admin@admin");
			user.setPassword("$2y$10$q.WBn19jQ0OewWBAk9dB2eUvBc4GkkVUdsAiqVUCBfId6jr6fTF.G");
			userRepository.save(user);



			User user1 = new User();
			user1.setEmail("user@user");
			user1.setPassword("$2y$10$mfjx0bL6mlkiSvi7GfZEYuXFEFoyZA3CNrbux/S/IY4qbvjKI7l9a");
			userRepository.save(user1);



			Ville ville = new Ville();
			ville.setNom("Casablanca");
			villeRepository.save(ville);



			Zone zone= new Zone();
			zone.setNom("ainChok");
			zone.setVille(ville);
			zoneRepository.save(zone);



			Zone zone1= new Zone();
			zone1.setNom("sidimouman");
			zone1.setVille(ville);
			zoneRepository.save(zone1);



			Zone zone2= new Zone();
			zone2.setNom("AinDiab");
			zone2.setVille(ville);
			zoneRepository.save(zone2);

			Garde garde = new Garde();
			garde.setType("24/24");
			gardeRepository.save(garde);


			Garde garde1 = new Garde();
			garde1.setType("20:00-->9:00");
			gardeRepository.save(garde1);



			Garde garde2 = new Garde();
			garde2.setType("9:00-->20:00");
			gardeRepository.save(garde2);


			Pharmacie pharmacie= new Pharmacie();
			pharmacie.setNom("PharmacieSalam 1");
			pharmacie.setEtat(1);
			pharmacie.setTelephone("0522526617");
			pharmacie.setAdresse("Rue 226 N°23-25");
			pharmacie.setUser(user1);
			pharmacie.setLat(33.54249458265374);
			pharmacie.setLog(-7.598850189005235);
			pharmacie.setZone(zone);
			pharmacieRepository.save(pharmacie);



			Pharmacie pharmacie1= new Pharmacie();
			pharmacie1.setNom("PharmacieSalam 2");
			pharmacie1.setEtat(1);
			pharmacie1.setTelephone("0545678934");
			pharmacie1.setAdresse("Rue 216 N°23-25 ");
			pharmacie1.setUser(user1);
			pharmacie1.setLat(33.59261910577268);
			pharmacie1.setLog(-7.608105631663111);
			pharmacie1.setZone(zone1);
			pharmacieRepository.save(pharmacie1);



			Pharmacie pharmacie2= new Pharmacie();
			pharmacie2.setNom("PharmacieSalam 3");
			pharmacie2.setEtat(1);
			pharmacie2.setTelephone("0529004477");
			pharmacie2.setAdresse("Ave Mohamed Taieb Naciri");
			pharmacie2.setUser(user1);
			pharmacie2.setLat(33.55262384909916);
			pharmacie2.setLog(-7.667797769233655);
			pharmacie2.setZone(zone2);
			pharmacieRepository.save(pharmacie2);


			Pharmacie pharmacie3= new Pharmacie();
			pharmacie3.setNom("PharmacieSalam 4");
			pharmacie3.setEtat(0);
			pharmacie3.setTelephone("0588453627");
			pharmacie3.setAdresse("Ave Mohamed Taieb Naciri");
			pharmacie3.setUser(user1);
			pharmacie3.setLat(33.5880432199153);
			pharmacie3.setLog(-7.619435282669442);
			pharmacie3.setZone(zone2);
			pharmacieRepository.save(pharmacie3);


			Pharmacie pharmacie4= new Pharmacie();
			pharmacie4.setNom("vzvdvzvzdv");
			pharmacie4.setEtat(2);
			pharmacie4.setTelephone("zdvfvzdv");
			pharmacie4.setAdresse("dffzevzrvzv");
			pharmacie4.setUser(user1);
			pharmacie4.setLat(33.55262384909916);
			pharmacie4.setLog(-7.667797769233655);
			pharmacie4.setZone(zone2);
			pharmacieRepository.save(pharmacie4);




		};


	}
}



