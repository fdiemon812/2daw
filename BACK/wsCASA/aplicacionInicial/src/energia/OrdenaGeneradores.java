package energia;

import java.util.Comparator;

public class OrdenaGeneradores implements Comparator<AbsGenerador>{

	@Override
	public int compare(AbsGenerador o1, AbsGenerador o2) {
		
		int result=0;
		if(o1.getLocalidad().compareTo(o2.getLocalidad())>0) {
			
			result=1;
		}else if(o1.getLocalidad().compareTo(o2.getLocalidad())<0) {
			
			result=-1;
		}else {
			
			if(o1.getFechaInicio().isBefore(o2.getFechaInicio())) {
				
				result=-1;
				
			}else if(o1.getFechaInicio().isAfter(o2.getFechaInicio())) {
				result=1;
		}
		
		
	}

		return result;
	}
}
