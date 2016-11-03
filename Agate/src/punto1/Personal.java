package punto1;
import java.util.*;
public class Personal {

	private String nombre;
	private ArrayList <Proyecto> enProyecto;
	
	//enum
	private String area;
	private String cargo;
	private double salario;
	private double incentivo;
	
	public Personal(String nombre){
		this.nombre = nombre;
	}

	public Personal(String nombre, String area, String cargo, double salario) {
		this.nombre = nombre;
		this.area = area;
		this.cargo = cargo;
		this.salario = salario;
		enProyecto = new ArrayList<Proyecto>();
	}
	
	public double getSalario(){
		return salario;
	}
	
	public String getArea(){
		return area;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public ArrayList<Proyecto> getEstaEnProyecto() {
		return enProyecto;
	}

	public void setEstaEnProyecto(ArrayList<Proyecto> estaEnProyecto) {
		this.enProyecto = estaEnProyecto;
	}
	
	public void agregarProyecto(Proyecto p){
		enProyecto.add(p);
	}
	
		
	public String proyectos(){
		String pr = "";
		if(enProyecto != null)
		for(Proyecto p : enProyecto){
			pr = pr+p.getTitulo();
		}
		if(pr == ""){
			pr = "Sin proyectos";
		}
		return pr;
	}
	
	public void setIncentivo(double incentivo){
		this.incentivo = incentivo;
	}
	

	@Override
	public String toString() {
		return "Nombre: " + nombre + ", enProyecto: " + proyectos() + ", area: " + area + ", cargo: " + cargo
				+ ", salario: " + salario + "\n" ;
	}

	public double getIncentivo() {
		// TODO Auto-generated method stub
		return incentivo;
	}
	
	
	
}
