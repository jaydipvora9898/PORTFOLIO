import Particles from "react-tsparticles"

const ParticlesBg = () => {

    return (

        <Particles
            options={{
                background: { color: "#020617" },
                particles: {
                    number: { value: 60 },
                    size: { value: 2 },
                    move: { speed: 1 },
                    links: {
                        enable: true,
                        color: "#3b82f6"
                    }
                }
            }}
        />

    )
}

export default ParticlesBg