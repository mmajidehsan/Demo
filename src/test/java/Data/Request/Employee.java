package Data.Request;

import lombok.*;

@Getter
@Setter
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Employee {
  String employee_name;
  int employee_salary;
  int employee_age;
}
