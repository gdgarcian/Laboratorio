package punto1;

import java.util.Random;

public class Coste {
	
	Random rand = new Random();
	
	private double periodicos;
	private double revistas;
	private double internet;
	private double tv;
	private double radio;
	private double carteles;
	private double folletos;
	
	private double costeTotal;
	private double costeTotalEstimado;
	
		
	public Coste(Anuncio a, double presupuesto){
		obtenerCostos(a, presupuesto);
		this.costeTotalEstimado = presupuesto;
		costeTotal();
	}
	
	private void obtenerCostos(Anuncio a, double presupuesto) {
		if(a.tv){
			this.tv = rand.nextInt(((int)presupuesto/a.n) + 10);
		}
		if(a.periodicos){
			this.periodicos = rand.nextInt(((int)presupuesto/a.n) + 10);
		}
		if(a.carteles){
			this.carteles = rand.nextInt(((int)presupuesto/a.n) + 10);
		}
		if(a.revistas){
			this.revistas = rand.nextInt(((int)presupuesto/a.n) + 10);
		}
		if(a.radio){
			this.radio = rand.nextInt(((int)presupuesto/a.n) + 10);
		}
		if(a.internet){
			this.internet = rand.nextInt(((int)presupuesto/a.n) + 10);
		}
	}
	
	private void costeTotal(){
		costeTotal = tv + radio + internet + periodicos + carteles + revistas;
	}

	@Override
	public String toString() {
		return "Coste [periodicos: " + periodicos + ", revistas: " + revistas + ", internet: " + internet + ", tv: " + tv
				+ ", radio: " + radio + ", carteles: " + carteles + ", folletos: " + folletos + ", costeTotal: "
				+ costeTotal + ", costeTotalEstimado: " + costeTotalEstimado + "]";		
	}

	public double getCosteTotal() {
		// TODO Auto-generated method stub
		return costeTotal;
	}
	
	
	
	
}
