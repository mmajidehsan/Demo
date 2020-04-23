package Data.Response;

import lombok.*;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
public class Employee {
  String id;
  String employee_name;
  String employee_salary;
  String employee_age;
  String profile_image;

}
