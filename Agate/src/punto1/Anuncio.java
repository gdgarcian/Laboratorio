package punto1;

public class Anuncio {

	public boolean periodicos;
	public boolean revistas;
	public boolean internet;
	public boolean tv;
	public boolean radio;
	public boolean carteles;
	public boolean folletos;
	public int n;
	
	public Anuncio(boolean periodicos, boolean revistas, boolean internet, boolean tv, boolean radio, boolean carteles,
			boolean folletos) {
		super();
		this.periodicos = periodicos;
		this.revistas = revistas;
		this.internet = internet;
		this.tv = tv;
		this.radio = radio;
		this.carteles = carteles;
		this.folletos = folletos;
		this.n = numeroAnuncios();
	}

	public int numeroAnuncios() {
		int contador = 0;
		if(tv){
			contador++;
		}
		if(periodicos){
			contador++;
		}
		if(carteles){
			contador++;
		}
		if(revistas){
			contador++;
		}
		if(radio){
			contador++;
		}
		if(internet){
			contador++;
		}
		return contador;
	}
	
}
