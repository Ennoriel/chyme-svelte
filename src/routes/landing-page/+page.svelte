<script>
	import Numbers from '$lib/components/landingPage/Numbers.svelte';
	import Text from '$lib/components/landingPage/Text.svelte';

	import Biking from './Biking.svelte';
</script>

<main>
	<Text
		title="Trouve Ton Sport"
		header="h1"
		buttons={[{ label: 'Comment ça marche' }]}
		img={Biking}
		center
		reverse
	>
		<p>
			Trouve ton sport permet de <strong
				>présenter simplement l'offre sportive de votre commune</strong
			> afin qu'un administré puisse naviger et trouver l'entrainement qui lui correspond.
		</p>
	</Text>

	<h2 style:text-align="center">Ils nous soutiennent</h2>

	<Numbers
		data={[
			{ compo: Biking, number: 'Le Poool', description: 'parcours Entrepreneurs x Le Poool' },
			{ compo: Biking, number: 'FrenchTech', description: 'French Tech Tremplin 2022' }
		]}
		theme="transparent"
		maxItemLg={2}
	/>

	<Text
		title="Pourquoi choisir Trouve Ton Sport"
		header="h2"
		buttons={[{ label: 'Prendre rendez-vous' }]}
		img={Biking}
		center
	>
		<p>
			Accès facile à des informations complètes et actualisées sur l'offre sportive de votre commune
			disponible en un clic
		</p>
		<p style:margin-top="8px">
			47% des créneaux de sport ne sont pas complet en milieu d'années : aidez vos associations à
			trouver des adhérents et optimisez l'utilisation des équipements sportifs
		</p>
		<!-- <p style:margin-top="8px">
			Internet constitue le premier moyen de recherche devant le forum des associations ou les journaux d'information locaux
		</p> -->
	</Text>

	<Text
		title="Comment ça marche"
		header="h2"
		buttons={[{ label: 'Prendre rendez-vous' }]}
		img={Biking}
		center
		reverse
	>
		<ol style:text-align="left">
			<li>Abonnement de la mairie</li>
			<li>Invitation des associations</li>
			<li>Ajout des entrainements par les associations</li>
		</ol>
		<p>Hop ! Toute l'offre sportive est alors disponible pour vos usagers !</p>
	</Text>

	<Text title="Tarifs" header="h2" buttons={[{ label: 'Prendre rendez-vous' }]} img={Biking} center>
		<p>Prix unique de 490€ / 10 000 habitants / an (revient à environ 35 € par association)</p>
		<p>Toutes les fonctionnalités incluses :</p>
		<ul style:text-align="left">
			<li>Compte mairie</li>
			<li>Compte association</li>
			<li>Moteur de recherche des entrainements</li>
			<li>Ajout des équipements publics (à venir)</li>
		</ul>
	</Text>
</main>

<style>
	main {
		max-width: 800px;
		margin: auto;

		--primary-color: blue;
		--secondary-color: red;
		--bg-color: #eee;
		--text-color: #333;
		--focus-color: green;
	}

	p {
		margin: 0;
	}
</style>
