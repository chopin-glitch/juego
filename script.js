function game(jugadaJugador) {
    const opciones = ['piedra', 'papel', 'tijera'];
    const jugadaComputadora = opciones[Math.floor(Math.random() * 3)];

    let mensaje = '';
    let resultado = '';

    if (jugadaJugador === jugadaComputadora) {
        mensaje = '¡Es un empate!';
    } else if (
        (jugadaJugador === 'piedra' && jugadaComputadora === 'tijera') ||
        (jugadaJugador === 'papel' && jugadaComputadora === 'piedra') ||
        (jugadaJugador === 'tijera' && jugadaComputadora === 'papel')
    ) {
        mensaje = '¡Ganaste!';
    } else {
        mensaje = '¡Perdiste!';
    }

    document.getElementById('mensaje').textContent = mensaje;
    document.getElementById('jugadaJugador').textContent = 'Tu jugada: ' + jugadaJugador;
    document.getElementById('jugadaComputadora').textContent = 'Jugada de la computadora: ' + jugadaComputadora;
}