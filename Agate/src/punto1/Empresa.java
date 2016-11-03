package punto1;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Random;

public class Empresa {

	private HashMap<String, Cliente> clientes = new HashMap<>();
	private HashMap<String, Personal> personal = new HashMap<>();
	private ArrayList<Nota> notas = new ArrayList<Nota>();
	private ArrayList<Proyecto> proyectos = new ArrayList<Proyecto>();
	
	public void registrarClientes(){
		if(clientes != null)
		for(Cliente c : clientes.values()){
			System.out.print(c.toString());
		}
	}
	
	public void estaEnProyeto(){		
		
		for(Personal p : personal.values()){
			if(p.getEstaEnProyecto() != null){
				for(Proyecto pr : p.getEstaEnProyecto()){
					p.setIncentivo(3);
					System.out.println(p.getNombre()+"    "+pr.getTitulo());
					if(pr.getAyudantes() != null){
						for(Personal per: pr.getAyudantes()){
							System.out.println(per.getNombre()+" "+pr.getTitulo()+" (ayudante)");
						}
					}
				}
			}
			
		}
	}
	
	public void verProyectos(){
		int i = 1;
		for(Proyecto p: proyectos){
			System.out.println(i+++")"+ p.getTitulo()+" "+p.getCliente().getNombre());
		}
	}
	
	public Proyecto seleccionarProyecto(int index){
		Proyecto temp = proyectos.get(index - 1);
		return temp;
	}
	
	public void calcularIncentivo(){
		for(Personal p : personal.values()){
			if(p.getEstaEnProyecto() != null){
				for(Proyecto pr : p.getEstaEnProyecto()){
					p.setIncentivo(3);
					System.out.println(p.getNombre()+"  gana por incentivo  " + p.getIncentivo());
				}
			}
		}
	}
		
	public void enArea(){
		System.out.println("\nAdministración: \n ");
		for(Personal p : personal.values()){
			if(p.getArea() == "Administración")
				System.out.println(p.getNombre());			
		}
		System.out.println("\nContabilidad: \n ");
		for(Personal p : personal.values()){
			if(p.getArea() == "Contabilidad")
				System.out.println(p.getNombre());
		}
		System.out.println("\nCreativos: \n ");
		for(Personal p : personal.values()){
			if(p.getArea() == "Creativo")
				System.out.println(p.getNombre());
		}
		System.out.println("\nInformáticos: \n");
		for(Personal p : personal.values()){
			if(p.getArea() == "informatica")
				System.out.println(p.getNombre());
			System.out.println("\n");
		}
		
	}
	
	public void salarioCargo(){
		for(Personal p : personal.values()){
			System.out.println(p.getNombre() + " : " + p.getSalario());
			System.out.println();
		}
	}
	
	public Personal buscarMiembro(String key){
		Personal per;
		per = personal.get(key);
		return per;
	}
	
	
	public void diretorCampaña(){
		
		for(Cliente c : clientes.values()){
			for(Proyecto p : c.getProyectos().values()){
				System.out.println(p.getDirector()+"  "+c.getProyectos());
			}
		}
	}
	
	public void listarPersonal(){
		for(Personal p : personal.values()){
			System.out.println(p.toString());
		}
	}
	
	public void agregarNota(Personal temp, String nota) {
		// TODO Auto-generated method stub
		Nota n = new Nota(temp, nota);
		notas.add(n);
	}
	
	public void imprimirNotas(){
		for(Nota n : notas){
			if(notas != null)
			System.out.println(n.getPersona().getNombre() + ": " + n.getNota());
		}
	}

	
	
	public void test(){
		//Administracion
		Personal p1 = new Personal("Macnelly", "Administración", "Director" ,10.0);
		Personal p2 = new Personal("Torres", "Administración", "Subdirector" ,10.0);
		Personal p3 = new Personal("Sherman", "Administración", "Secretario" ,10.0);
		Personal p4 = new Personal("Cárdenas", "Administración", "Mecanógrafo" ,10.0);
		Personal p5 = new Personal("Messi", "Administración", "Archivos" ,10.0);
		Personal p6 = new Personal("iniesta", "Administración", "Recepcionista" ,10.0);
		//Contabilidad
		Personal p7 = new Personal("Benzema", "Contabilidad", "Contable" ,10.0);
		Personal p8 = new Personal("Mariana", "Contabilidad", "Fianzas" ,10.0);
		Personal p9 = new Personal("Pajón", "Contabilidad", "Contabilidad" ,10.0);
		Personal p10 = new Personal("Lebron", "Contabilidad", "Asistente compra" ,10.0);
		//Creativo
		Personal p11 = new Personal("Usain", "Creativo", "Director finanzas" ,10.0);
		Personal p12 = new Personal("Roger", "Creativo", "Diseñador gráfico" ,10.0);
		Personal p13 = new Personal("Nadal", "Creativo", "fotógrafo" ,10.0);
		Personal p14 = new Personal("Djokovick", "Creativo", "Escritor" ,10.0);
		Personal p15 = new Personal("murray", "Creativo", "Editor" ,10.0);
		Personal p16 = new Personal("Khalifa", "Creativo", "Audio" ,10.0);
		Personal p17 = new Personal("Phelps", "Creativo", "Bibliotecario" ,10.0);
		//informatica
		Personal p18 = new Personal("Katherine", "informatica", "Director Informática" ,10.0);
		Personal p19 = new Personal("Ibarguen", "informatica", "Técnico de red" ,10.0);
		
		//Clientes
		Contacto toto = new Contacto("Juan", "calle 123", "77777777", "juan@hotmail.com");
		Anuncio ap1 = new Anuncio(true, false, true, false, true, false, true);
		Anuncio ap2 = new Anuncio(false, true, false, false, false, false, true);
		HashMap <String, Proyecto> pr = new HashMap<String, Proyecto>();
		ArrayList<Personal> ayudantes = new ArrayList<Personal>();
		ayudantes.add(p8);		
		ayudantes.add(p11);
		
		Cliente c1 = new Cliente("Totto", "Ave. Siempre viva", "1234567", "Totto@totto.co",toto,  pr);	
		Proyecto py1 = new Proyecto("Maletas Gratis", "04/07/2014", "04/09/2014", 200, p1, ayudantes, c1, ap1);
		ayudantes.remove(p8);
		ayudantes.remove(p11);
		ayudantes.add(p15);
		ayudantes.add(p13);
		Proyecto py2 = new Proyecto("Billeteras al 50%", "01/01/2015", "01/02/2015", 300, p3, ayudantes, c1, ap2);
		clientes.put(c1.getNombre(), c1); 
		p1.agregarProyecto(py1);
		p8.agregarProyecto(py1);
		p11.agregarProyecto(py1);
		p3.agregarProyecto(py2);
		p15.agregarProyecto(py2);
		p13.agregarProyecto(py2);
		proyectos.add(py1);
		proyectos.add(py2);
		
		
		personal.put(p1.getNombre(), p1);
		personal.put(p2.getNombre(), p2);
		personal.put(p3.getNombre(), p3);
		personal.put(p4.getNombre(), p4);
		personal.put(p5.getNombre(), p5);
		personal.put(p6.getNombre(), p6);
		personal.put(p7.getNombre(), p7);
		personal.put(p8.getNombre(), p8);
		personal.put(p9.getNombre(), p9);
		personal.put(p10.getNombre(), p10);
		personal.put(p11.getNombre(), p11);
		personal.put(p12.getNombre(), p12);
		personal.put(p13.getNombre(), p13);
		personal.put(p14.getNombre(), p14);
		personal.put(p15.getNombre(), p15);
		personal.put(p16.getNombre(), p16);
		personal.put(p17.getNombre(), p17);
		personal.put(p18.getNombre(), p18);
		personal.put(p19.getNombre(), p19);
		
		
	}

	
}
