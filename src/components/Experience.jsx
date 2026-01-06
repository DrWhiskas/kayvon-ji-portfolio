import React, { forwardRef, useState } from 'react';
import '../styles/experience.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ExperienceCard from './ExperienceCard';

const Experience = forwardRef((props, ref) => {
	const [Nref, inView] = useInView({
		triggerOnce: false,
	});

	return (
		<motion.section
			ref={Nref}
			initial={{ opacity: 0 }}
			animate={{ opacity: inView ? 1 : 0 }}
			transition={{ duration: 0.6 }}
			className="experience"
		>
			<section className="experience" ref={ref}>
				<h2 className="experience__title title">Experience</h2>
				<ExperienceCard
					position="Développeur Wordpress"
					company="Click Avantage"
					time="10/2025 - 12/2025"
					work={[
						"Développement d'une plateforme d'annonces",
						'Intégration de paiements et fonctionnalités interactives.',
						'Gestion de la base de données et sécurité',
						'Optimisation du design et de l’expérience utilisateur.',
					]}
					stack={['Wordpress']}
				/>
				<ExperienceCard
					position="Développeur Web Wordpress"
					company="Baaldi"
					time="10/2024 - 06/2025"
					work={[
						'Participation à la refonte et au redesign complet d’un site web sous WordPress.',
						'Correction de bugs et optimisation des fonctionnalités existantes.',
					]}
					stack={['Wordpress']}
				/>
				<ExperienceCard
					position="Développeur Front-end - Freelance"
					company="Inkkube"
					time="03/2024 - 09/2025"
					work={[
						'Participation à la conception d’une application web.',
						'Développement de composants réutilisables.',
						'Participation à la conception d’un endpoint.',
					]}
					stack={['React', 'TypeScript', 'Node.js']}
				/>
				<ExperienceCard
					position="Technicien - Stage"
					company="Groupement Les Mousquetaires"
					time="05/2018 - 07/2018"
					work={[
						'Préparation et configuration des postes de travail dans le parc informatique.',
						'Mise en service des équipements et installation des logiciels nécessaires.',
						'Support technique aux utilisateurs pour assurer un fonctionnement optimal des systèmes.',
					]}
					stack={['Hardware', 'Configuration', 'Déploiement', 'Support']}
				/>
				<ExperienceCard
					position="Support technique informatique"
					company="Groupement Les Mousquetaires"
					time="08/2017 - 08/2017"
					work={[
						'Analyse approfondie des problèmes matériels informatiques des clients.',
						'Résolution efficace et rapide des incidents pour assurer la satisfaction client.',
						'Collaboration avec les équipes internes pour garantir la qualité du service et la résolution durable des problèmes.',
					]}
					stack={['Support', 'Hardware', "Résolution d'incidents", 'Service client']}
				/>
			</section>
		</motion.section>
	);
});
export default Experience;
