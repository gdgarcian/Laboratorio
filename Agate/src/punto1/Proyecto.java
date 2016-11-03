package punto1;

import java.util.ArrayList;
import java.util.Random;

public class Proyecto {
	
	Random rand = new Random();
	
	private String titulo;
	private String fechaInicio;
	private String fechaFinalizacion;
	private String fechaIncioPlanificado;
	private String fechaFinalizacionPlanificada;
	private int gradoFinalizacion; //Mismo avance
	private double presupuesto;

	//Coste final
	//Método de costes
	//Método de pagos al personal dado el tiempo (Tiempo y pagos lo mismo)
	
	private Coste costoTotal;
	private Personal director;
	private ArrayList<Personal> ayudantes;
	private Cliente cliente;
	private Anuncio anuncio;
	
	
	
	public Proyecto(String titulo, String fechaIncioPlanificado,
			String fechaFinalizacionPlanificada, double presupuesto, Personal director, ArrayList<Personal> ayudantes,
			Cliente cliente, Anuncio anuncio) {
		super();
		this.titulo = titulo;
		this.fechaInicio = fechaInicio;
		this.fechaFinalizacion = fechaFinalizacion;
		this.fechaIncioPlanificado = fechaIncioPlanificado;
		this.fechaFinalizacionPlanificada = fechaFinalizacionPlanificada;
		this.presupuesto = presupuesto;
		this.director = director;
		this.ayudantes = ayudantes;
		this.cliente = cliente;
		this.anuncio = anuncio;
		this.gradoFinalizacion = rand.nextInt(101);
		this.costoTotal = new Coste(anuncio, presupuesto);
	}


	public boolean dentroPresupuesto(){
		if(presupuesto < costoTotal.getCosteTotal()){
			return false;
		}
		return true;
	}
	
	public void cambiarFechaProyecto(String fechaInicioPlanificado, String fechaFinalizacionPlanificado){
		this.fechaFinalizacionPlanificada = fechaFinalizacionPlanificado;
		this.fechaIncioPlanificado = fechaInicioPlanificado;
		
	}
	
	public String getTitulo() {
		return titulo;
	}




	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}




	public String getFechaInicio() {
		return fechaInicio;
	}




	public void setFechaInicio(String fechaInicio) {
		this.fechaInicio = fechaInicio;
	}




	public String getFechaFinalizacion() {
		return fechaFinalizacion;
	}




	public void setFechaFinalizacion(String fechaFinalizacion) {
		this.fechaFinalizacion = fechaFinalizacion;
	}




	public String getFechaIncioPlanificado() {
		return fechaIncioPlanificado;
	}




	public void setFechaIncioPlanificado(String fechaIncioPlanificado) {
		this.fechaIncioPlanificado = fechaIncioPlanificado;
	}




	public String getFechaFinalizacionPlanificada() {
		return fechaFinalizacionPlanificada;
	}




	public void setFechaFinalizacionPlanificada(String fechaFinalizacionPlanificada) {
		this.fechaFinalizacionPlanificada = fechaFinalizacionPlanificada;
	}




	public int getGradoFinalizacion() {
		return gradoFinalizacion;
	}




	public void setGradoFinalizacion(int gradoFinalizacion) {
		this.gradoFinalizacion = gradoFinalizacion;
	}




	public double getPresupuesto() {
		return presupuesto;
	}




	public void setPresupuesto(double presupuesto) {
		this.presupuesto = presupuesto;
	}




	public Coste getCostoTotal() {
		return costoTotal;
	}




	public void setCostoTotal(Coste costoTotal) {
		this.costoTotal = costoTotal;
	}




	public Personal getDirector() {
		return director;
	}




	public void setDirector(Personal director) {
		this.director = director;
	}




	public ArrayList<Personal> getAyudantes() {
		return ayudantes;
	}




	public void setAyudantes(ArrayList<Personal> ayudantes) {
		this.ayudantes = ayudantes;
	}




	public Cliente getCliente() {
		return cliente;
	}




	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}

	



	@Override
	public String toString() {
		return "Proyecto [titulo: " + titulo + ", fechaInicio: " + fechaInicio + ", fechaFinalizacion= "
				+ fechaFinalizacion + ", fechaIncioPlanificado: " + fechaIncioPlanificado
				+ ", fechaFinalizacionPlanificada= " + fechaFinalizacionPlanificada + ", gradoFinalizacion= "
				+ gradoFinalizacion + ", presupuesto= " + presupuesto + ", costoTotal= " + costoTotal + ", director= "
				+ director + ", ayudantes= " + ayudantes + ", cliente= " + cliente + "]";
	}

	
	
	
	
	
	
	
	
	
}
